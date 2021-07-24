import { mount } from '@vue/test-utils'
import CheckListHeader from '../CheckListHeader.vue'

describe('CheckListHeader', () => {
  it('should be defined', () => {
    expect(CheckListHeader).toBeDefined()
  })

  describe('snapshots', () => {
    it('should render component', () => {
      const component = mount(CheckListHeader)
      expect(component).toMatchSnapshot()
    })
  })
})
