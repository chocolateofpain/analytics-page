import Searchbar from './Searchbar.vue'

export default {
  title: 'Design System/Searchbar',
  component: Searchbar
}

export const Default = () => ({
  components: { Searchbar },
  template: `
  <div>
    <Searchbar />

    <br/><br/>

    <Searchbar 
      placeholder="Some random placeholder"
    />

    <br/><br/>

    <Searchbar 
      placeholder="A fixed min-width"
      minWidth="500"
    />
  </div>
`
})
