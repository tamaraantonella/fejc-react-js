import { Accordion } from './Accordion';

export default {
  title: 'Ch Components/Accordion/Overview',
  component: Accordion,
  argTypes: {
    title: {
      description: 'The title to be displayed in the accordion header.',
      control: 'text'
    },
    subtitle: {
      description: 'The subtitle to be displayed in the accordion header.',
      control: 'text',
      default: undefined
    },
    icon: {
      description: 'The icon to be displayed in the accordion header. If undefined or not retrievable, it is not displayed in the view.',
      control: 'text',
      default: undefined
    },
    expanded: {
      description: 'Toggle whether the accordion should render expanded or collapsed.',
      control: 'boolean',
      default: false
    }
  },
  args: {
    title: 'Accordion title',
    children: <span>Accordion content</span>
  }
};

const Template = (props) => {
  return (
    <div className="w-full max-w-[600px]">
      <Accordion {...props} icon={typeof props.icon === 'string' ? <img alt="" src={props.icon}/> : props.icon}/>
    </div>
  );
};

export const OverviewStory = Template.bind({});
OverviewStory.storyName = 'Overview';
