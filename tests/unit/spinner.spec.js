import chai, { expect } from 'chai'
import chaiDom from 'chai-dom';
import { shallowMount } from '@vue/test-utils'
import Spinner from '@/components/Spinner';
chai.use(chaiDom);

describe('Spinner.vue', () => {
    it('renders Spinner if spin is true', () => {
        const spin = true;
        const wrapper = shallowMount(Spinner, {
            propsData: { spin }
        })
        expect(wrapper.find('.spinner').exists()).to.equal(true);
    });
    it('does not render Spinner if spin is false', () => {
        const spin = false;
        const wrapper = shallowMount(Spinner, {
            propsData: { spin }
        })
        expect(wrapper.find('.spinner').exists()).to.equal(false);
    });
})
