import { mount } from '@vue/test-utils'
import CheckItemChart from '../CheckItemChart.vue'

// TODO: fix test to check for basic functionality
describe.skip('CheckItemChart', () => {
  it('should be defined', () => {
    expect(CheckItemChart).toBeDefined()
  })

  describe('snapshots', () => {
    it('should render component', () => {
      const component = mount(CheckItemChart)
      expect(component).toMatchSnapshot()
    })
  })
})
