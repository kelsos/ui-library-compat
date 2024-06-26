import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Tab from '@/components/tabs/tab/Tab.vue';
import { RouterLinkStub } from '~/tests/stubs/RouterLinkStub';

function createWrapper(options?: any) {
  return mount(Tab, {
    ...options,
    propsData: { tabValue: 'tab-1', ...options?.propsData },
    stubs: {
      RouterLink: RouterLinkStub,
    },
  });
}

describe('tabs/Tab', () => {
  it('renders properly', () => {
    const label = 'Tab 1';
    const wrapper = createWrapper({
      slots: {
        default: label,
        prepend: 'prepend',
      },
    });
    const elem = wrapper.find('button');
    expect(elem.classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_text_/)]),
    );
    expect(elem.text()).toContain('prepend');
    expect(elem.find('span').text()).toContain(label);
  });

  it('passes disabled props', async () => {
    const wrapper = createWrapper();
    expect(wrapper.find('button').attributes('disabled')).toBeUndefined();
    await wrapper.setProps({ disabled: true });
    expect(wrapper.find('button').attributes('disabled')).toBeDefined();
    await wrapper.setProps({ link: true });
    expect(wrapper.find('button').attributes('disabled')).toBeDefined();
    await wrapper.setProps({ disabled: false, link: false });
    expect(wrapper.find('button').attributes('disabled')).toBeUndefined();
  });

  it('passes color props', async () => {
    const wrapper = createWrapper({
      propsData: {
        color: 'primary',
      },
    });
    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_grey_/)]),
    );

    await wrapper.setProps({ active: true });
    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_primary_/)]),
    );

    await wrapper.setProps({ color: 'secondary' });
    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_secondary_/)]),
    );

    await wrapper.setProps({ color: 'error' });
    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_error_/)]),
    );

    await wrapper.setProps({ color: 'success' });
    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_success_/)]),
    );
  });

  it('passes grow props', async () => {
    const wrapper = createWrapper({});

    expect(wrapper.find('button').classes()).not.toEqual(
      expect.arrayContaining([expect.stringMatching(/--grow_/)]),
    );

    await wrapper.setProps({ grow: true });
    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/--grow_/)]),
    );
  });

  it('passes align props', async () => {
    const wrapper = createWrapper({});

    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_tab--center_/)]),
    );

    await wrapper.setProps({ align: 'start' });
    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_tab--start_/)]),
    );

    await wrapper.setProps({ align: 'end' });
    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_tab--end_/)]),
    );
  });

  it('tab as link', async () => {
    const wrapper = createWrapper({
      propsData: {
        exact: true,
        exactPath: true,
        link: true,
        to: '/tabs',
      },
    });

    let elem = wrapper.find('a');
    expect(elem.classes()).toEqual(
      expect.arrayContaining([expect.stringMatching(/_tab_/)]),
    );
    expect(elem.attributes().target).toMatch('_self');
    expect(elem.attributes().href).toBeUndefined();

    await wrapper.setProps({
      target: '_blank',
    });

    elem = wrapper.find('a');
    expect(elem.attributes().target).toMatch('_blank');
    expect(elem.attributes().href).toBeDefined();
  });
});
