import { mount } from '@vue/test-utils'
import Searchbar from '../Searchbar.vue'

describe('Searchbar', () => {
  it('should be defined', () => {
    expect(Searchbar).toBeDefined()
  })

  describe('snapshots', () => {
    it('should render default component', () => {
      const component = _mount(Searchbar)
      expect(component).toMatchSnapshot()
    })

    it('should render with a custom width', () => {
      const component = _mount({ minWidth: 300 })
      expect(component).toMatchSnapshot()
    })
  })

  /**
   * Simple wrapper to avoid duplicated code
   */
  const _mount = (props) => {
    return mount(Searchbar, {
      propsData: props
    })
  }
})
