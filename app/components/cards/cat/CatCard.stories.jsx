/* eslint-disable import/no-anonymous-default-export */
import CatCard from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

export default {
  title: 'cards/CatCard',
  component: CatCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CatCard {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCatCardProps.base,
};
