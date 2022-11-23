import { useState } from 'react';

import { Accordion } from './Accordion';

const icon = (
  <img
    alt=""
    src="https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/200,/0/default.png"
  />
);

export default {
  title: 'Ch Components/Accordion/Details',
  component: Accordion,
  args: {
    title: 'Simple Story',
    children: <span>Content</span>
  },
  parameters: {
    controls: {
      disabled: false,
      include: /^expanded$/
    }
  }
};

const Template = (props) => {
  return (
    <div className="w-full max-w-[600px]">
      <Accordion {...props}/>
    </div>
  );
};

export const SimpleStory = Template.bind({});
SimpleStory.storyName = 'Title and content';
SimpleStory.args = {};

export const SimpleStoryWithSubtitle = Template.bind({});
SimpleStoryWithSubtitle.storyName = 'Title, subtitle and content';
SimpleStoryWithSubtitle.args = {
  subtitle: 'Small description',
  children: <span>Content</span>
};

export const SimpleStoryWithIcon = Template.bind({});
SimpleStoryWithIcon.storyName = 'Title, icon and content';
SimpleStoryWithIcon.args = {
  icon,
  children: <span>Content</span>
};

export const SimpleStoryWithFullHeader = Template.bind({});
SimpleStoryWithFullHeader.storyName = 'Title, subtitle, icon and content';
SimpleStoryWithFullHeader.args = {
  title: 'Simple Story',
  subtitle: 'Small description',
  icon,
  children: <span>Content</span>
};

export const SimpleStoryWithLongTitle = Template.bind({});
SimpleStoryWithLongTitle.storyName = 'Long title';
SimpleStoryWithLongTitle.args = {
  title: 'This is an example of a long title to test whether the accordion is displayed appropriately',
  subtitle: 'Small description',
  icon,
  children: <span>Content</span>
};

export const SimpleStoryWithLongSubTitle = Template.bind({});
SimpleStoryWithLongSubTitle.storyName = 'Long subtitle';
SimpleStoryWithLongSubTitle.args = {
  subtitle: 'This is an example of a long subtitle to test whether the accordion is displayed appropriately',
  icon,
  children: <span>Content</span>
};

export const SimpleStoryWithLongContent = Template.bind({});
SimpleStoryWithLongContent.storyName = 'Long content';
SimpleStoryWithLongContent.args = {
  subtitle: 'Small description',
  icon,
  // expanded: true,
  children: (
    <div>
      <p>The captain sails with fight, command the pacific ocean.</p>
      <p>Ferox, noster bursas cito examinare de bassus, barbatus adelphis.</p>
      <p>Chickpeas can be varnished with sliced chicory, also try mash uping the porridge with vinegar.</p>
      <p>Senior, vital cosmonauts surprisingly open a collective, extraterrestrial machine.</p>
    </div>
  )
};

export const CollapsedAnimationStory = Template.bind({});
CollapsedAnimationStory.storyName = 'Animation: Starting from collapsed';
CollapsedAnimationStory.decorators = [
  (Story, context) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <Story
        {...context}
        args={{
          ...context.args,
          expanded,
          onChange: setExpanded
        }}
      />
    );
  }
];
CollapsedAnimationStory.args = {
  subtitle: 'Small description',
  icon,
  children: (
    <div>
      <p>The captain sails with fight, command the pacific ocean.</p>
      <p>Ferox, noster bursas cito examinare de bassus, barbatus adelphis.</p>
      <p>Chickpeas can be varnished with sliced chicory, also try mash uping the porridge with vinegar.</p>
      <p>Senior, vital cosmonauts surprisingly open a collective, extraterrestrial machine.</p>
    </div>
  )
};

export const ExpandedAnimationStory = Template.bind({});
ExpandedAnimationStory.storyName = 'Animation: Starting from expanded';
ExpandedAnimationStory.decorators = [
  (Story, context) => {
    const [expanded, setExpanded] = useState(true);
    return (
      <Story
        {...context}
        args={{
          ...context.args,
          expanded,
          onChange: setExpanded
        }}
      />
    );
  }
];
ExpandedAnimationStory.args = {
  expanded: false,
  subtitle: 'Small description',
  icon
};
