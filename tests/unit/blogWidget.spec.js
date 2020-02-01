import { expect } from 'chai'
import { createLocalVue, mount } from '@vue/test-utils'
import router from '@/router/index';
import VueI18n from 'vue-i18n';
import Router from 'vue-router';
import BlogWidget from '@/components/BlogWidget.vue'
import i18n from '@/copy/site-copy';

const localVue = createLocalVue()
localVue.use(VueI18n);
localVue.use(Router);

describe('BlogWidget.vue', () => {
    it('renders BlogWidget', () => {
        const post = {
            title: 'Test Title',
            excerpt: 'excerpt'
        };
        const wrapper = mount(BlogWidget, {
            localVue,
            i18n,
            router,
            propsData: { post }
        });
        expect(wrapper.exists()).to.equal(true);
        expect(wrapper.contains('h3')).to.equal(true);
        expect(wrapper.find('h3').text()).to.equal(post.title);
        expect(wrapper.contains('p')).to.equal(true);
        expect(wrapper.find('p').text()).to.equal(post.excerpt);
    })
})
