import { type Meta, type StoryFn, type StoryObj } from '@storybook/vue';
import Button from '@/components/buttons/button/Button.vue';
import Icon from '@/components/icons/Icon.vue';
import { contextColors } from '@/consts/colors';
import { default as ButtonGroup, type Props } from './ButtonGroup.vue';

const render: StoryFn<Props> = (args) => ({
  components: { ButtonGroup, Button, Icon },
  setup() {
    const count = ref(0);
    return { count, args };
  },
  template: `
    <div v-if="'value' in args">
      <ButtonGroup v-bind="args" v-model="args.value">
        <Button>
          <Icon name="align-left" />
        </Button>
        <Button>
          <Icon name="align-center" />
        </Button>
        <Button>
          <Icon name="align-right" />
        </Button>
        <Button>
          <Icon name="align-justify" />
        </Button>
      </ButtonGroup>
      <div v-if="args.required" class="mt-4 text-rui-error">required: *</div>
    </div>
    <div v-else>
      <ButtonGroup v-bind="args">
        <Button @click="count--">Decrease</Button>
        <Button @click="count++">Increase</Button>
        <Button @click="count++">
          <Icon name="add-line"></Icon>
        </Button>
      </ButtonGroup>
      <div class="mt-4 text-rui-text">Count: {{ count }}</div>
    </div>
  `,
});

const meta: Meta<Props> = {
  title: 'Components/Button/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  render,
  argTypes: {
    vertical: { control: 'boolean' },
    color: { control: 'select', options: contextColors },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'text'],
      table: { category: 'Shape' },
    },
    size: { control: 'select', options: ['medium', 'sm', 'lg'] },
  },
};

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {},
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const DefaultToggle: Story = {
  args: {
    value: 0,
    color: 'primary',
  },
};

export const ToggleRequired: Story = {
  args: {
    required: true,
    value: 0,
    color: 'primary',
  },
};

export const VerticalToggle: Story = {
  args: {
    vertical: true,
    value: 0,
    color: 'primary',
  },
};

export const Toggle: Story = {
  args: {
    color: 'primary',
    value: 0,
  },
};

export const OutlinedToggle: Story = {
  args: {
    variant: 'outlined',
    value: 0,
    color: 'primary',
  },
};

export const TextToggle: Story = {
  args: {
    variant: 'text',
    value: 0,
    color: 'primary',
  },
};

export const DefaultToggleMultiple: Story = {
  args: {
    value: [0],
    color: 'primary',
  },
};

export const ToggleMultipleRequired: Story = {
  args: {
    required: true,
    value: [0],
    color: 'primary',
  },
};

export const VerticalToggleMultiple: Story = {
  args: {
    vertical: true,
    value: [0],
    color: 'primary',
  },
};

export const ToggleMultiple: Story = {
  args: {
    color: 'primary',
    value: [0],
  },
};

export const OutlinedToggleMultiple: Story = {
  args: {
    variant: 'outlined',
    value: [0],
    color: 'primary',
  },
};

export const TextToggleMultiple: Story = {
  args: {
    variant: 'text',
    value: [0],
    color: 'primary',
  },
};

export default meta;
