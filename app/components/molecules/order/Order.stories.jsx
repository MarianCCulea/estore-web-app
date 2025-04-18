/* eslint-disable import/no-anonymous-default-export */
import Order from './Order';
import { mockOrderProps } from './Order.mocks';

export default {
  title: 'order/Order',
  component: Order,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Order {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockOrderProps.base,
};
