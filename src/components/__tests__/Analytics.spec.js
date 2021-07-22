import { mount } from '@vue/test-utils'
import Analytics from '../Analytics.vue'

describe('Analytics', () => {
  it('should be defined', () => {
    expect(Analytics).toBeDefined()
  })

  describe('snapshots', () => {
    it('should render component', () => {
      const component = mount(Analytics)
      expect(component).toMatchSnapshot()
    })
  })
})
