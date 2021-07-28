import Searchbar from './Searchbar.vue'

export default {
  title: 'Design System/Searchbar',
  component: Searchbar,
  argTypes: {
    minWidth: { control: { type: 'number' } },
    placeholder: { control: {type: 'text' } },
    value: { control: false }
  },
}

export const Default = (args, { argTypes }) => ({
  components: { Searchbar },
  data () {
    return { value: ''}
  },
  props: Object.keys(argTypes).filter(x => x !== 'value'),
  template: `
    <div>
      <Searchbar v-bind="$props" v-on="props" v-model="value"/>
    </div>
  `
})
