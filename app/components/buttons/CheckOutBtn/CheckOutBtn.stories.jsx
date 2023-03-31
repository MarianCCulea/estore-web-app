/* eslint-disable import/no-anonymous-default-export */
import CheckOutBtn from './CheckOutBtn';
import { mockCheckOutBtnProps } from './CheckOutBtn.mocks';

export default {
  title: 'buttons/CheckOutBtn',
  component: CheckOutBtn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CheckOutBtn {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCheckOutBtnProps.base,
};
