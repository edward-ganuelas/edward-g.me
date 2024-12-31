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

<script>
import client from '@/directus';
export default {
    name: 'Gaming',
    data() {
        return {
            currentlyPlaying: ''
        }
    },
    methods: {
        async getGames() {
            const response = await client.getItems('games');
            this.currentlyPlaying = response.data.map(games => games.currently_playing);
        }
    },
    async beforeMount() {
        await this.getGames();
    }
}
</script>

<style lang="scss" scoped>
.gaming {
    margin-top: 18px;
}
</style>