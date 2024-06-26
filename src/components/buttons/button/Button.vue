<script lang="ts" setup>
import { default as RuiProgress } from '@/components/progress/Progress.vue';
import type { ContextColorsType } from '@/consts/colors';

type ModelType = number | string;

export interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  color?: ContextColorsType;
  rounded?: boolean;
  elevation?: number | string | null;
  variant?: 'default' | 'outlined' | 'text' | 'fab' | 'list';
  icon?: boolean;
  active?: boolean;
  size?: 'sm' | 'lg';
  tag?: 'button' | 'a';
  type?: 'button' | 'submit';
  value?: ModelType;
}

defineOptions({
  name: 'RuiButton',
});

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  loading: false,
  color: undefined,
  rounded: false,
  elevation: null,
  variant: 'default',
  icon: false,
  active: false,
  size: undefined,
  tag: 'button',
  type: 'button',
  value: undefined,
});

const emit = defineEmits<{
  (e: 'click', event: Event): void;
  (e: 'input', value?: ModelType): void;
}>();

const { disabled, elevation, variant, size, value } = toRefs(props);

const attrs = useAttrs();
const css = useCssModule();

const usedElevation: ComputedRef<number | string> = computed(() => {
  if (get(disabled))
    return 0;

  const elevationProp = get(elevation);
  if (elevationProp !== null)
    return elevationProp;

  if (get(variant) === 'fab')
    return 6;

  return 0;
});

const spinnerSize: ComputedRef<number> = computed(() => {
  const sizeVal = get(size);
  if (sizeVal === 'lg')
    return 26;

  if (sizeVal === 'sm')
    return 18;

  return 22;
});

function onClick() {
  emit('input', get(value));
}

const slots = useSlots();
</script>

<template>
  <Component
    :is="tag"
    :class="[
      css.btn,
      css[color ?? 'grey'],
      css[size ?? ''],
      css[variant],
      `shadow-${usedElevation}`,
      {
        [css.loading]: loading,
        [css._rounded]: rounded,
        [css.icon]: icon,
        [css.active]: active,
        [css.text]: variant === 'list',
      },
    ]"
    :disabled="disabled || loading"
    :type="tag === 'button' ? type : undefined"
    v-bind="attrs"
    v-on="
      // eslint-disable-next-line vue/no-deprecated-dollar-listeners-api
      $listeners
    "
    @click="onClick()"
  >
    <slot
      v-if="slots.prepend"
      name="prepend"
    />
    <span
      v-if="slots.default"
      :class="css.label"
    >
      <slot />
    </span>
    <slot
      v-if="slots.append"
      name="append"
    />
    <RuiProgress
      v-if="loading"
      :class="css.spinner"
      :size="spinnerSize"
      circular
      thickness="2"
      variant="indeterminate"
    />
  </Component>
</template>

<style lang="scss" module>
@use '@/styles/colors.scss' as c;

:global(.dark) {
  .btn {
    @apply disabled:bg-white/[.12] #{!important};

    @each $color in c.$context-colors {
      &.#{$color} {
        @apply text-rui-text;

        @if index((warning, success, info), $color) {
          @apply text-rui-light-text;
        }

        @if index((primary, secondary), $color) {
          &.outlined,
          &.text {
            &.active {
              @apply bg-rui-#{$color}-darker/60 text-rui-#{$color}-lighter;
            }
          }
        }
      }
    }

    &.active {
      @apply bg-rui-grey-50;
    }

    &.grey {
      @apply bg-rui-grey-300 hover:bg-rui-grey-100 active:bg-rui-grey-50 text-rui-light-text;

      &.outlined,
      &.text {
        @apply active:bg-white/10 hover:bg-white/[.04] text-rui-text;

        &.active {
          @apply bg-white/30;
        }
      }
    }
  }
}

.btn {
  @apply text-sm leading-[1.5rem] font-medium outline outline-1 outline-transparent outline-offset-[-1px] flex items-center justify-center gap-x-2 relative;
  @apply px-4 py-1.5 rounded transition-all;
  @apply disabled:bg-black/[.12] disabled:text-rui-text-disabled disabled:active:text-rui-text-disabled #{!important};

  .label {
    @apply inline-block;
  }

  &._rounded {
    @apply rounded-full;
  }

  &.sm {
    @apply px-2.5 py-1 text-[.8125rem] leading-[1.375rem];
  }

  &.lg {
    @apply px-6 py-2 text-base leading-[1.625rem];
  }

  @each $color in c.$context-colors {
    &.#{$color} {
      @apply bg-rui-#{$color} hover:bg-rui-#{$color}-darker active:bg-rui-#{$color}-darker/90 text-rui-dark-text;

      &.active {
        @apply bg-rui-#{$color}-darker;
      }

      &.outlined,
      &.text {
        @apply bg-transparent hover:bg-rui-#{$color}-lighter/[.04] active:bg-rui-#{$color}-lighter/10 text-rui-#{$color};

        &.active {
          @apply bg-rui-#{$color}-lighter/30;
        }
      }

      &.outlined {
        @apply outline-rui-#{$color}/[0.5];
      }
    }
  }

  &.grey {
    @apply bg-rui-grey-200 hover:bg-rui-grey-100 active:bg-rui-grey-50 text-rui-text;

    &.active {
      @apply bg-rui-grey-50;
    }

    &.outlined,
    &.text {
      @apply bg-transparent hover:bg-black/[.04] active:bg-black/10;

      &.active {
        @apply bg-black/10;
      }
    }

    &.outlined {
      @apply outline-rui-text;
    }

    &.text {
      @apply text-rui-text-secondary;
    }
  }

  &.outlined,
  &.text {
    @apply disabled:bg-transparent disabled:active:bg-transparent #{!important};
  }

  &.outlined {
    @apply disabled:outline-rui-text-disabled;
  }

  &.text {
    @apply px-2;

    &.sm {
      @apply px-1.5;
    }

    &.lg {
      @apply px-2.5;
    }
  }

  &.fab {
    @apply rounded-full py-2;

    &.lg {
      @apply py-3;
    }

    &.sm {
      @apply py-1.5 px-2;
    }
  }

  &.list {
    @apply p-3 rounded-none w-full justify-start text-left;

    &.sm {
      @apply px-3 py-1;
    }

    .label {
      @apply w-full;
    }
  }

  &.icon {
    @apply rounded-full px-3 py-3;

    &.lg {
      @apply px-4 py-4;
    }

    &.sm {
      @apply px-1 py-1;
    }
  }

  &.fab.icon {
    &.sm {
      @apply px-2 py-2;
    }
  }

  &.loading {
    @apply space-x-0;

    > *:not(.spinner) {
      @apply opacity-0 invisible;
    }
  }

  .spinner {
    @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
  }
}
</style>
