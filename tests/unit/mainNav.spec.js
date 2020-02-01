import { expect } from 'chai'
import { createLocalVue, mount } from '@vue/test-utils'
import router from '@/router/index';
import VueI18n from 'vue-i18n';
import Router from 'vue-router';
import MainNav from '@/components/MainNav.vue'
import i18n from '@/copy/site-copy';

const localVue = createLocalVue()
localVue.use(VueI18n);
localVue.use(Router);

describe('MainNav.vue', () => {
    it('renders MainNav', () => {
        const wrapper = mount(MainNav, {
            localVue,
            i18n,
            router
        });
        expect(wrapper.exists()).to.equal(true);
    });
})
