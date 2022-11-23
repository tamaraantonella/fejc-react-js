import { MemoryRouter } from 'react-router';
import { IconLink } from './IconLink';

export default {
  title: 'Ch Components/IconLink/Overview',
  component: IconLink,
  decorators: [
    story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ],
  argTypes: {
    label: {
      description: 'The label to be displayed in the button.',
      control: 'text',
      defaultValue: 'Label'
    },
    icon: {
      description: 'The icon url to be displayed in the accordion header. If undefined or not retrievable, it is not displayed in the view.',
      control: 'text',
      defaultValue: 'https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/500,/0/default.png'
    },
    to: {
      description: 'The destination url when the button is clicked',
      control: 'text',
      defaultValue: ''
    }
  }
};

const Template = (props) => {
  return (
    <div className="w-full max-w-[600px]">
      <IconLink {...props} icon={typeof props.icon === 'string' ? <img alt="" src={props.icon}/> : props.icon}/>
    </div>
  );
};

export const OverviewStory = Template.bind({});
OverviewStory.storyName = 'Overview';
