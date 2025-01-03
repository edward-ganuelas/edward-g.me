<template>
    <div class="filters container">
        <div class="row">
            <div class="col-12">
                <p>{{$t('blog.filters')}}</p>
            </div>
        <button type="button" class="btn btn-secondary col" @click="onFilterClick('clear')">{{$t('blog.clear')}}</button>
        <button type="button" 
            class="btn btn-secondary col" 
            v-for="tag in savedTags" 
            v-bind:id="tag.id" 
            :key="tag.id" 
            @click="onFilterClick(tag.tag, tag.id)" 
            :disabled="tag.tag === filter">
                {{tag.tag}}
        </button>
        </div>
    </div>
</template>

<script setup>
import { event } from 'vue-gtag';
import { useApplicationStore } from '@/store/useApplicationStore';
const store = useApplicationStore()
import { computed } from 'vue';

defineProps({
    savedTags: {
        type: Array,
        required: true
    }
})

const filter = computed(() => store.filter);

function onFilterClick(filter, tagId) {
    if (filter.value === 'clear') {
        store.filter = '';
    } else {
        store.filter = tagId;
    }
    event('click', { eventCategory: `Filter ${filter.value}`, eventAction: 'click' });
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.filters {
    padding: 18px;
}
ul {
    list-style-type: none;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
}
.btn{
    border-radius: 0;
    margin-left: 1rem;
    margin-bottom: 1rem;
}
</style>
