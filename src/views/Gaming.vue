<template>
    <div class="container gaming">
        <div class="row">
            <div class="col-12">
                <h3 class="sr-only">{{$t('gaming.header')}}</h3>
            </div>
            <div class="col-12 col-md-8 offset-md-2 card shadow">
                <div class="card-body" v-html="$t('gaming.mainContent')">
                </div>
            </div>
            <!-- <div class="col-12">
                <h3>{{$t('gaming.currentlyPlaying')}}</h3>
            </div>
            <div class="col-12 col-md-8 offset-md-2 card shadow">
                <ul>
                    <li v-for="(games, index) in currentlyPlaying" v-bind:key="index">
                        {{games}}
                    </li>
                </ul>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import client from '@/directus';
import { ref, onBeforeMount } from 'vue';

const currentlyPlaying = ref('');
async function getGames() {
    const response = await client.getItems('games');
    currentlyPlaying.value = response.data.map(games => games.currently_playing);
}

onBeforeMount(async () => {
    // await getGames()
})
</script>


<style lang="scss" scoped>
.gaming {
    margin-top: 18px;
}
</style>