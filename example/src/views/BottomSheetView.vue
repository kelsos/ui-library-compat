<script lang="ts" setup>
import { ref } from 'vue';
import {
  type BottomSheetProps,
  RuiBottomSheet,
  RuiButton,
  RuiCard,
} from '@rotki/ui-library-compat';

interface ExtraProperties {
  label: string;
}

type BottomSheetData = BottomSheetProps & ExtraProperties;
const bottomSheets = ref<BottomSheetData[]>([
  { label: 'Persistent', persistent: true },
  { label: 'Non Persistent', persistent: false },
]);
</script>

<template>
  <div>
    <h2
      class="text-h4 mb-6"
      data-cy="bottom-sheets"
    >
      Bottom Sheets
    </h2>
    <div class="grid gap-4 grid-rows-2 grid-cols-6 justify-items-start mb-14">
      <RuiBottomSheet
        v-for="(bottomSheet, i) in bottomSheets"
        :key="i"
        v-bind="bottomSheet"
        width="900px"
        :data-cy="`bottom-sheet-${i}`"
      >
        <template #activator="{ on }">
          <RuiButton
            data-cy="activator"
            v-on="on"
          >
            {{ bottomSheet.label }}
          </RuiButton>
        </template>
        <template #default="{ close }">
          <RuiCard no-padding>
            <template #header>
              Header
            </template>
            <template #subheader>
              Subheader
            </template>

            <div class="p-4 pb-0">
              <div class="h-[500px]">
                Contents {{ i }}
              </div>

              <div class="border-t border-default py-4">
                <div class="flex gap-2 w-full justify-end">
                  <RuiButton
                    data-cy="close"
                    variant="outlined"
                    color="primary"
                    @click="close()"
                  >
                    Close
                  </RuiButton>
                </div>
              </div>
            </div>
          </RuiCard>
        </template>
      </RuiBottomSheet>
    </div>
  </div>
</template>
