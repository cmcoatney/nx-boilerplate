import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PostDetailComponent } from './post-detail.component';

export default {
  title: 'PostDetailComponent',
  component: PostDetailComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PostDetailComponent>;

const Template: Story<PostDetailComponent> = (args: PostDetailComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}