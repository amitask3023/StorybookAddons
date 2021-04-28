
import { Story, Meta } from '@storybook/angular';

import CheckboxComponent from './checkbox.component';

export default {
  title: 'Example/Checkbox',
  component: CheckboxComponent,
  argTypes: {

  },
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  component: CheckboxComponent,
  props: args,
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'checkbox',
  isdisabled : true
};
