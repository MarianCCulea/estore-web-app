/* eslint-disable import/no-anonymous-default-export */
import HeaderSignInBtn from './HeaderSignInBtn';
import { mockHeaderSignInBtnProps } from './HeaderSignInBtn.mocks';

export default {
  title: 'buttons/HeaderSignInBtn',
  component: HeaderSignInBtn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeaderSignInBtn {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeaderSignInBtnProps.base,
};
