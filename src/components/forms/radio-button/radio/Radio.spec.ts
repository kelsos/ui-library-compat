import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Radio from './Radio.vue';

function createWrapper(options?: any) {
  return mount(Radio, {
    ...options,
    stubs: {
      RuiIcon: true,
    },
  });
}

describe('forms/RadioButton/Radio', () => {
  it('renders properly', () => {
    const label = 'Radio Label';
    const wrapper = createWrapper({
      propsData: {
        internalValue: 'value',
      },
      slots: {
        default: label,
      },
    });
    expect(wrapper.text()).toContain(label);
    expect(wrapper.get('label > div').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_radio_/)]),
    );
  });

  it('passes disabled props', async () => {
    const wrapper = createWrapper({
      propsData: {
        internalValue: 'value',
      },
    });
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined();
    expect(wrapper.get('label').classes()).not.toEqual(
      expect.arrayContaining([expect.stringMatching(/_disabled_/)]),
    );
    await wrapper.setProps({ disabled: true });
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
    expect(wrapper.get('label').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_disabled_/)]),
    );
    await wrapper.setProps({ disabled: false });
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined();
    expect(wrapper.get('label').classes()).not.toEqual(
      expect.arrayContaining([expect.stringMatching(/_disabled_/)]),
    );
  });

  it('render icon correctly', async () => {
    const wrapper = createWrapper({
      propsData: {
        internalValue: 'value',
      },
    });

    expect(wrapper.find('ruiicon-stub').attributes('name')).toBe(
      'checkbox-blank-circle-line',
    );

    await wrapper.setProps({ value: 'value' });
    expect(wrapper.find('ruiicon-stub').attributes('name')).toBe(
      'radio-button-line',
    );
  });

  it('passes color props', async () => {
    const wrapper = createWrapper({
      propsData: { color: 'primary', internalValue: 'value' },
    });
    expect(wrapper.find('label > div').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_primary_/)]),
    );

    await wrapper.setProps({ color: 'secondary' });
    expect(wrapper.find('label > div').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_secondary_/)]),
    );

    await wrapper.setProps({ color: 'error' });
    expect(wrapper.find('label > div').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_error_/)]),
    );

    await wrapper.setProps({ color: 'success' });
    expect(wrapper.find('label > div').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_success_/)]),
    );
  });

  it('passes size props', async () => {
    const wrapper = createWrapper({
      propsData: { internalValue: 'value', size: 'sm' },
    });
    expect(wrapper.find('label > div').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_sm_/)]),
    );

    await wrapper.setProps({ size: 'lg', sm: false });
    expect(wrapper.find('label > div').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_lg_/)]),
    );
  });

  it('passes hint props', async () => {
    const wrapper = createWrapper({
      propsData: {
        internalValue: 'value',
      },
    });
    expect(wrapper.find('.details > div').exists()).toBeFalsy();

    const hint = 'Radio Hints';
    await wrapper.setProps({ hint });
    expect(wrapper.find('.details > div').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/text-rui-text-secondary/)]),
    );
    expect(wrapper.find('.details > div').text()).toBe(hint);
  });

  it('passes hint errorMessages', async () => {
    const wrapper = createWrapper({
      propsData: {
        internalValue: 'value',
      },
    });
    expect(wrapper.find('.details > div').exists()).toBeFalsy();

    const errorMessage = 'Radio Error Message';
    await wrapper.setProps({ errorMessages: [errorMessage] });
    expect(wrapper.find('.details > div').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/text-rui-error/)]),
    );
    expect(wrapper.find('.details > div').text()).toBe(errorMessage);
  });

  it('passes hideDetails', async () => {
    const wrapper = createWrapper({
      propsData: {
        hideDetails: true,
        hint: 'This hint should not be rendered',
        internalValue: 'value',
      },
    });
    expect(wrapper.find('.details > div').exists()).toBeFalsy();
  });
});
