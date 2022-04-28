import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PostCardComponent } from './post-card.component';

export default {
  title: 'PostCardComponent',
  component: PostCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PostCardComponent>;

const Template: Story<PostCardComponent> = (args: PostCardComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}