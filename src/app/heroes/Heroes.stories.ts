import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeroesComponent } from './heroes.component';

export default {
  title: 'TOH/Heroes',
  component: HeroesComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
    }),
  ],
} as Meta;

const Template: Story<HeroesComponent> = (args: HeroesComponent) => ({
  props: args,
});

export const Default = Template.bind({});