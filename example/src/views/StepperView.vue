<script lang="ts" setup>
import {
  type FooterStepperProps,
  RuiFooterStepper,
  RuiStepper,
  type StepperProps,
  StepperState,
} from '@rotki/ui-library-compat';
import { ref } from 'vue';

const steppers = ref<StepperProps[]>([
  {
    steps: [
      {
        title: 'Inactive',
        description: 'Lorem ipsum',
        state: StepperState.inactive,
      },
      {
        title: 'Active',
        description: 'Lorem ipsum',
        state: StepperState.active,
      },
      {
        title: 'Done',
        description: 'Lorem ipsum',
        state: StepperState.done,
      },
      {
        title: 'Error',
        description: 'Lorem ipsum',
        state: StepperState.error,
      },
      {
        title: 'Warning',
        description: 'Lorem ipsum',
        state: StepperState.warning,
      },
      {
        title: 'Info',
        description: 'Lorem ipsum',
        state: StepperState.info,
      },
      {
        title: 'Success',
        description: 'Lorem ipsum',
        state: StepperState.success,
      },
    ],
  },
  {
    orientation: 'vertical',
    steps: [
      {
        title: 'Inactive',
        description: 'Lorem ipsum',
        state: StepperState.inactive,
      },
      {
        title: 'Active',
        description: 'Lorem ipsum',
        state: StepperState.active,
      },
      {
        title: 'Done',
        description: 'Lorem ipsum',
        state: StepperState.done,
      },
      {
        title: 'Error',
        description: 'Lorem ipsum',
        state: StepperState.error,
      },
      {
        title: 'Warning',
        description: 'Lorem ipsum',
        state: StepperState.warning,
      },
      {
        title: 'Info',
        description: 'Lorem ipsum',
        state: StepperState.info,
      },
      {
        title: 'Success',
        description: 'Lorem ipsum',
        state: StepperState.success,
      },
    ],
  },
  {
    iconTop: true,
    steps: [
      {
        title: 'Inactive',
        description: 'Lorem ipsum',
        state: StepperState.inactive,
      },
      {
        title: 'Active',
        description: 'Lorem ipsum',
        state: StepperState.active,
      },
      {
        title: 'Done',
        description: 'Lorem ipsum',
        state: StepperState.done,
      },
      {
        title: 'Error',
        description: 'Lorem ipsum',
        state: StepperState.error,
      },
      {
        title: 'Warning',
        description: 'Lorem ipsum',
        state: StepperState.warning,
      },
      {
        title: 'Info',
        description: 'Lorem ipsum',
        state: StepperState.info,
      },
      {
        title: 'Success',
        description: 'Lorem ipsum',
        state: StepperState.success,
      },
    ],
  },
  {
    iconTop: true,
    orientation: 'vertical',
    steps: [
      {
        title: 'Inactive',
        description: 'Lorem ipsum',
        state: StepperState.inactive,
      },
      {
        title: 'Active',
        description: 'Lorem ipsum',
        state: StepperState.active,
      },
      {
        title: 'Done',
        description: 'Lorem ipsum',
        state: StepperState.done,
      },
      {
        title: 'Error',
        description: 'Lorem ipsum',
        state: StepperState.error,
      },
      {
        title: 'Warning',
        description: 'Lorem ipsum',
        state: StepperState.warning,
      },
      {
        title: 'Info',
        description: 'Lorem ipsum',
        state: StepperState.info,
      },
      {
        title: 'Success',
        description: 'Lorem ipsum',
        state: StepperState.success,
      },
    ],
  },
  {
    custom: true,
    steps: [
      {
        title: 'Inactive',
        description: 'Lorem ipsum',
        state: StepperState.inactive,
      },
      {
        title: 'Active',
        description: 'Lorem ipsum',
        state: StepperState.active,
      },
      {
        title: 'Done',
        description: 'Lorem ipsum',
        state: StepperState.done,
      },
    ],
  },
  {
    custom: true,
    orientation: 'vertical',
    steps: [
      {
        title: 'Inactive',
        description: 'Lorem ipsum',
        state: StepperState.inactive,
      },
      {
        title: 'Active',
        description: 'Lorem ipsum',
        state: StepperState.active,
      },
      {
        title: 'Done',
        description: 'Lorem ipsum',
        state: StepperState.done,
      },
    ],
  },
  {
    custom: true,
    iconTop: true,
    steps: [
      {
        title: 'Inactive',
        description: 'Lorem ipsum',
        state: StepperState.inactive,
      },
      {
        title: 'Active',
        description: 'Lorem ipsum',
        state: StepperState.active,
      },
      {
        title: 'Done',
        description: 'Lorem ipsum',
        state: StepperState.done,
      },
    ],
  },
  {
    custom: true,
    iconTop: true,
    titleClass: 'text-rui-primary',
    subtitleClass: 'text-rui-info',
    steps: [
      {
        title: 'Inactive',
        description: 'Lorem ipsum',
        state: StepperState.inactive,
      },
      {
        title: 'Active',
        description: 'Lorem ipsum',
        state: StepperState.active,
      },
      {
        title: 'Done',
        description: 'Lorem ipsum',
        state: StepperState.done,
      },
    ],
  },
  {
    custom: true,
    iconTop: true,
    orientation: 'vertical',
    steps: [
      {
        title: 'Inactive',
        description: 'Lorem ipsum',
        state: StepperState.inactive,
      },
      {
        title: 'Active',
        description: 'Lorem ipsum',
        state: StepperState.active,
      },
      {
        title: 'Done',
        description: 'Lorem ipsum',
        state: StepperState.done,
      },
    ],
  },
]);

const footerSteppers = ref<FooterStepperProps[]>([
  {
    value: 1,
    pages: 5,
  },
  {
    value: 2,
    pages: 5,
    variant: 'bullet',
  },
  {
    value: 2,
    pages: 5,
    variant: 'bullet',
    hideButtons: true,
  },
  {
    value: 3,
    pages: 5,
    variant: 'progress',
  },
  {
    value: 3,
    pages: 5,
    variant: 'progress',
    hideButtons: true,
  },
  {
    value: 4,
    pages: 5,
    variant: 'pill',
  },
  {
    value: 1,
    pages: 5,
    arrowButtons: true,
  },
  {
    value: 2,
    pages: 5,
    variant: 'bullet',
    arrowButtons: true,
  },
  {
    value: 4,
    pages: 5,
    variant: 'bullet',
    arrowButtons: true,
    hideButtons: true,
  },
  {
    value: 3,
    pages: 5,
    variant: 'progress',
    arrowButtons: true,
  },
  {
    value: 3,
    pages: 5,
    variant: 'progress',
    arrowButtons: true,
    hideButtons: true,
  },
]);
</script>

<template>
  <div>
    <h2
      class="text-h4 mb-6"
      data-cy="steppers"
    >
      Steppers
    </h2>
    <RuiStepper
      v-for="(stepper, i) in steppers"
      :key="`${i}-stepper`"
      class="mb-6"
      v-bind="stepper"
    />
    <h2
      class="text-h4 mb-6 mt-14"
      data-cy="footer-steppers"
    >
      Footer Steppers
    </h2>
    <RuiFooterStepper
      v-for="(stepper, i) in footerSteppers"
      :key="`${i}-footer-stepper`"
      class="mb-6"
      v-bind="stepper"
      @input="stepper.value = $event"
    />
  </div>
</template>
