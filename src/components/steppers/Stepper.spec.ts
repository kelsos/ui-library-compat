import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Stepper from '@/components/steppers/Stepper.vue';
import {
  StepperOrientation,
  StepperState,
  type StepperStep,
} from '@/types/stepper';

const createWrapper = (options: any) => mount(Stepper, options);

describe('Components/Stepper', () => {
  const steps: StepperStep[] = [
    { title: 'Step', description: 'lorem ipsum', state: StepperState.done },
    { title: 'Step', description: 'lorem ipsum', state: StepperState.active },
    { title: 'Step', description: 'lorem ipsum', state: StepperState.inactive },
  ];

  it('renders properly', () => {
    const wrapper = createWrapper({ propsData: { steps } });
    expect(wrapper.classes()).toMatch(/_stepper_/);
  });

  it('passes props correctly', async () => {
    const wrapper = createWrapper({
      propsData: { steps },
    });
    expect(wrapper.classes()).toMatch(/_horizontal_/);
    await wrapper.setProps({ orientation: StepperOrientation.vertical });
    expect(wrapper.classes()).toMatch(/_vertical_/);
    await wrapper.setProps({ iconTop: true });
    expect(wrapper.classes()).toMatch(/_icon-top_/);
  });
});
