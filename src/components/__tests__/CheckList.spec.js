import { mount } from '@vue/test-utils'
import CheckList from '../CheckList.vue'

describe.only('CheckList', () => {
  it('should be defined', () => {
    expect(CheckList).toBeDefined()
  })

  describe('snapshots', () => {
    it('should render component if no data is available', () => {
      const component = mount(CheckList)
      expect(component).toMatchSnapshot()
    })

    it('should render component if data is available', () => {
      const component = mount(CheckList, { dataProps: { checks }})
      expect(component).toMatchSnapshot()
    })
  })
})

const checks = [
  {
    "id": "f676e8c7-a6e4-442a-b5de-27cb213161da",
    "name": "Check 0",
    "type": "BROWSER",
    "success": 0.5039,
    "avg": 498.7613666666667,
    "p95": 948,
    "p99": 990
  },
  {
    "id": "d2a67163-3cfb-476a-aaff-0d0e8ca18a0f",
    "name": "Check 1",
    "type": "BROWSER",
    "success": 0.4989,
    "avg": 498.558,
    "p95": 948,
    "p99": 989
  },
  {
    "id": "5324e4bd-d3a3-490a-b921-d1ed265502d6",
    "name": "Check 2",
    "type": "API",
    "success": 0.49833333333333335,
    "avg": 496.9130666666667,
    "p95": 949,
    "p99": 989
  }
]
