<script setup lang='ts'>
import { ref } from 'vue';
import { type ColorPickerProps, RuiCard, RuiColorPicker } from '@rotki/ui-library-compat';

const colorPickers = ref<ColorPickerProps[]>([
  { value: '' },
  { value: '45858a' },
]);
</script>

<template>
  <div>
    <h2
      class="text-h4 mb-6"
      data-cy="color-pickers"
    >
      Color Pickers
    </h2>
    <div class="grid gap-4 md:grid-cols-2 items-center justify-center">
      <div
        v-for="(item, i) in colorPickers"
        :key="i"
      >
        <RuiCard class="mb-2">
          <RuiColorPicker
            v-model="item.value"
            v-bind="item"
            :data-cy="`color-picker-${i}`"
          />
        </RuiCard>
        Selected value: {{ item.value }}
      </div>
    </div>
  </div>
</template>
