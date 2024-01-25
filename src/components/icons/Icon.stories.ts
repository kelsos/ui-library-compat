import * as Icons from '@/icons';
import { contextColors } from '@/consts/colors';
import { default as Icon, type Props } from './Icon.vue';
import type { Meta, StoryFn, StoryObj } from '@storybook/vue';

const render: StoryFn<Props> = args => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: '<Icon v-bind="args" />',
});

const meta: Meta<Props> = {
  argTypes: {
    color: { control: 'select', options: contextColors },
    name: {
      control: 'select',
      options: Object.values(Icons).map(({ name }) => name.slice(3)),
    },
    size: {
      control: 'number',
    },
  },
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          'All icons can be seen here: <a target="_blank" href="https://remixicon.com/">https://remixicon.com/</a>. Use it <b>without</b> prefix `ri-`',
      },
    },
  },
  render,
  tags: ['autodocs'],
  title: 'Components/Icon',
};

type Story = StoryObj<Props>;

export const Primary: Story = {
  args: {
    color: 'primary',
    name: 'arrow-down-circle-fill',
    size: 24,
  },
};

export const PrimaryLarge: Story = {
  args: {
    color: 'primary',
    name: 'arrow-down-circle-fill',
    size: 48,
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    name: 'arrow-down-circle-fill',
    size: 24,
  },
};

export const SecondaryTiny: Story = {
  args: {
    color: 'secondary',
    name: 'arrow-down-circle-fill',
    size: 14,
  },
};

export default meta;
