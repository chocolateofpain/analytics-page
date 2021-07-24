import { mount } from '@vue/test-utils'
import CheckList from '../CheckList.vue'

describe('CheckList', () => {
  it('should be defined', () => {
    expect(CheckList).toBeDefined()
  })

  describe('snapshots', () => {
    it('should render component', () => {
      const component = mount(CheckList)
      expect(component).toMatchSnapshot()
    })
  })
})
