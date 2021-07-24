import { mount } from '@vue/test-utils'
import Navigation from '../Navigation.vue'

describe('Navigation', () => {
  it('should be defined', () => {
    expect(Navigation).toBeDefined()
  })

  describe('snapshots', () => {
    it('should render component', () => {
      const component = mount(Navigation)
      expect(component).toMatchSnapshot()
    })
  })
})
