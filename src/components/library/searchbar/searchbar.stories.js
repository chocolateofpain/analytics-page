import Searchbar from './Searchbar.vue'

export default {
  title: 'Design System/Searchbar',
  component: Searchbar,
  argTypes: {
    placeholder: { control: {type: 'text' } },
    minWidth: { control: { type: 'number' } },
  },
}

export const Default = (args, { argTypes }) => ({
  components: { Searchbar },
  props: Object.keys(argTypes),
  template: `
    <div>
      <Searchbar v-bind="$props" v-on="props" />
    </div>
  `
})
