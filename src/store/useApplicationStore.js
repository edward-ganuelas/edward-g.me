import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicationStore = defineStore('application', () => {
    const blogPosts = ref('');
    const blogTags = ref('');
    const tags = ref('');
    const filter = ref('');
    const isDarkTheme = ref(false);

    return { blogPosts, blogTags, tags, filter, isDarkTheme }
})