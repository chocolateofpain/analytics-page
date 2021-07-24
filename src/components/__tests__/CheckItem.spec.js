import { mount } from '@vue/test-utils'
import CheckItem from '../CheckItem.vue'

describe('CheckItem', () => {
  const checkItemData = {
    id: "bc128a29-953b-44a5-a1f0-e114fca2a22f",
    name: "Check 0",
    type: "API",
    success: 0.5071,
    avg: 500.6750666666667,
    p95: 950,
    p99: 989 
  }
  it('should be defined', () => {
    expect(CheckItem).toBeDefined()
  })

  describe('snapshots', () => {
    it('should render component', () => {
      const component = mount(CheckItem, { propsData: { checkItemData }  })
      expect(component).toMatchSnapshot()
    })
  })
})
