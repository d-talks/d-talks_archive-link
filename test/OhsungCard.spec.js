import { mount } from '@vue/test-utils'
import OhsungCard from '@/components/card/oh-sung/index.vue'

describe('OhsungCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(OhsungCard)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
