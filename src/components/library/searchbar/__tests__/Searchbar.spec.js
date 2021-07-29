import { mount } from '@vue/test-utils'
import Searchbar from '../Searchbar.vue'

describe('Searchbar', () => {
  it('should be defined', () => {
    expect(Searchbar).toBeDefined()
  })

  describe('snapshots', () => {
    it('should render default component', () => {
      const component = _mount({})
      expect(component).toMatchSnapshot()
    })

    it('should render with a custom width', () => {
      const component = _mount({ minWidth: 300 })
      expect(component).toMatchSnapshot()
    })

    it('should render with a custom placeholder', () => {
      const component = _mount({ placeholder: 'I\'m a random placeholder' })
      expect(component).toMatchSnapshot()
    })
  })

  describe('input functionality', () => {
    it('should update input', async () => {
      const component = _mount({})
      const searchbarInput = component.find('input[type="text"]')
      await searchbarInput.setValue('hello darkness my old friend')
      expect(component.find('input[type="text"]').element.value).toBe('hello darkness my old friend')
    })

    it('should call onClickClearInput', async () => {
      // TODO: improve test to not throw deprecated warning
      const onClickClearInputMethod = jest.spyOn(Searchbar.methods, 'onClickClearInput')
      const component = mount(Searchbar, {
        attrs: {
          value: ''
        },
        methods: onClickClearInputMethod
      })
      const searchbarInput = component.find('input[type="text"]')
      await searchbarInput.setValue('hello darkness my old friend')
      const clearInputButton = component.find('.clear-input')
      clearInputButton.trigger('mousedown', { left: true })
      expect(onClickClearInputMethod).toHaveBeenCalled()
    })
  })

  /**
   * Simple wrapper to avoid duplicated code
   */
  const _mount = (props) => {
    return mount(Searchbar, {
      propsData: props,
      attrs: {
        value: ''
      }
    })
  }
})
