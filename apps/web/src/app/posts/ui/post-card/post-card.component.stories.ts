import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PostCardComponent } from './post-card.component';

import { NgMaterialModule } from '@nxws-material';

export default {
  title: 'PostCardComponent',
  component: PostCardComponent,
  decorators: [
    moduleMetadata({
      imports: [NgMaterialModule],
    })
  ],
} as Meta<PostCardComponent>;

const Template: Story<PostCardComponent> = (args: PostCardComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
