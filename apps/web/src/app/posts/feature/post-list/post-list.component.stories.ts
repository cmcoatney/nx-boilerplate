import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PostListComponent } from './post-list.component';

export default {
  title: 'PostListComponent',
  component: PostListComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PostListComponent>;

const Template: Story<PostListComponent> = (args: PostListComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}