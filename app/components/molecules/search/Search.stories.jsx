/* eslint-disable import/no-anonymous-default-export */
import Search from './Search';
import { mockSearchProps } from './Search.mocks';

export default {
  title: 'utility/Search',
  component: Search,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Search {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSearchProps.base,
};
