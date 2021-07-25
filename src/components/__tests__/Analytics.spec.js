import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Analytics from '../Analytics.vue'

describe('Analytics', () => {
  let component 
  
  beforeAll(() => {
    jest.mock('axios', () => ({
      _esmodule: true, 
      default: {
        get: jest.fn(() => Promise.resolve({ data: mockChecks }))
      }
    }))
  })

  it('should be defined', async () => {
    expect(Analytics).toBeDefined()
  })

  describe('snapshots', () => {
    it('should render component when checks === null', async () => {
      component = mount(Analytics)
      await flushPromises()
      expect(component).toMatchSnapshot()
    })

    it('should render component when checks !== null', async () => {
      component = mount(Analytics, {
        data() {
          return {
            checks: mockChecks
          }
        }
      })
      await flushPromises()
      expect(component).toMatchSnapshot()
    })
  })

  describe('fetchChecks', () => {
    it('should call fetchChecks on created', async () => {
      const fetchChecksSpy = jest.spyOn(Analytics.methods, 'fetchChecks')
      component = mount(Analytics)
      await flushPromises()
      expect(fetchChecksSpy).toHaveBeenCalled()
    })
  })
})

const mockChecks = [
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
