import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TagLine from '@/components/TagLine.vue'

describe('TagLine.vue', () => {
    it('renders tag line', () => {
        const tagLine = 'new message'
        const wrapper = shallowMount(TagLine, {
            propsData: { tagLine }
        })
        expect(wrapper.text()).to.include(tagLine)
    })
})
