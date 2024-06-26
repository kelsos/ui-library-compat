<script lang="ts" setup>
import { clamp } from '@vueuse/shared';
import { Color, useElementDrag } from './utils';

const props = defineProps<{
  color: Color;
}>();

const emit = defineEmits<{
  (e: 'input', event: { saturation: number; brightness: number }): void;
}>();

function hueToHex(hue: number) {
  return new Color({ h: hue, s: 1, v: 1 }).toHexString();
}

const state = reactive({
  hexString: hueToHex(props.color.hue),
  saturation: props.color.saturation,
  brightness: props.color.brightness,
});

const cursorTop: Ref<number> = ref(0);
const cursorLeft: Ref<number> = ref(0);

const cursorStyle = computed(() => ({
  top: `${get(cursorTop) * 100}%`,
  left: `${get(cursorLeft) * 100}%`,
}));

const wrapper: Ref<HTMLElement | null> = ref(null);

function updatePosition() {
  set(cursorLeft, state.saturation);
  set(cursorTop, (1 - state.brightness));
}

const instance = getCurrentInstance();

const {
  handleClick,
  onMouseDown,
} = useElementDrag(emitColor);

function emitColor(x: number, y: number) {
  if (!instance)
    return;

  const el = instance.proxy.$el;
  const rect = el?.getBoundingClientRect();

  if (!rect)
    return;

  const { width, height, left, top } = rect;
  let calculatedX = x - left;
  let calculatedY = y - top;

  calculatedX = clamp(calculatedX, 0, width);
  calculatedY = clamp(calculatedY, 0, height);

  const saturation = calculatedX / width;
  const brightness = clamp(-(calculatedY / height) + 1, 0, 1);

  set(cursorLeft, calculatedX / width);
  set(cursorTop, calculatedY / height);

  state.saturation = saturation;
  state.brightness = brightness;

  emit('input', { saturation, brightness });
}

onMounted(() => {
  updatePosition();
});

whenever(
  () => props.color,
  (value) => {
    state.hexString = hueToHex(value.hue);
    state.saturation = value.saturation;
    state.brightness = value.brightness;
    updatePosition();
  },
  { deep: true },
);

const css = useCssModule();
</script>

<template>
  <div
    ref="wrapper"
    class="rui-color-board"
    :class="css.saturation"
    :style="{ backgroundColor: state.hexString }"
    @click="handleClick($event)"
    @mousedown="onMouseDown($event)"
  >
    <div :class="css.saturation__white" />
    <div :class="css.saturation__black" />
    <div
      :class="css.cursor"
      :style="cursorStyle"
    />
  </div>
</template>

<style lang="scss" module>
.saturation {
  @apply relative w-full h-40 overflow-hidden cursor-pointer;

  &__white,
  &__black {
    @apply absolute top-0 left-0 right-0 bottom-0 to-transparent;
  }

  &__black {
    @apply bg-gradient-to-t from-black;
  }

  &__white {
    @apply bg-gradient-to-r from-white;
  }
}

.cursor {
  @apply absolute w-5 h-5 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow rounded-full;

  &:after {
    content: '';
    @apply absolute w-full h-full rounded-full border-2 border-black/15;
  }
}
</style>
