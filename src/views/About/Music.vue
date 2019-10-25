<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="sr-only">{{$t('about.music.header')}}</h3>
            </div>
            <div class="col-12 col-md-8 offset-md-2 card shadow">
                <div class="card-body" v-html="$t('about.music.mainContent')">
                </div>
            </div>
            <div class="col-12 col-md-8 offset-md-2">
                <h4>{{$t('about.music.thumbsUp')}}</h4>
            </div>
            <div class="col-4 col-md-4 offset-md-4 toggle">
                <p>Sort</p>
                <div class="btn-group btn-group-toggle">
                    <label class="btn bnw btn-secondary" v-bind:class="{active: filter === ''}">
                        <input type="radio" name="options" id="clear" autocomplete="off" v-model="filter" value=""> {{$t('about.music.clear')}}
                    </label>
                    <label class="btn colour btn-secondary" v-bind:class="{active: filter === 'title'}">
                        <input type="radio" name="options" id="title" autocomplete="off" v-model="filter" value="title"> 
                        {{$t('about.music.title')}}
                    </label>
                    <label class="btn colour btn-secondary" v-bind:class="{active: filter === 'artist'}">
                        <input type="radio" name="options" id="artist" autocomplete="off" v-model="filter" value="artist"> 
                        {{$t('about.music.artist')}}
                    </label>
                    <label class="btn colour btn-secondary" v-bind:class="{active: filter === 'album'}">
                        <input type="radio" name="options" id="album" autocomplete="off" v-model="filter" value="album"> 
                        {{$t('about.music.album')}}
                    </label>
                </div>
            </div>
            <div class="col-12 col-md-8 offset-md-2 card shadow">
                <div class="card-body">
                    <table>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Album</th>
                        </tr>
                        </thead>
                    <tbody>
                        <tr v-for="(music, index) in filteredContent" v-bind:key="index">
                            <td v-for="(content, index2) in music" v-bind:key="index2">{{content}}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import music from '@/copy/music';
import _ from 'lodash';
export default {
    name: 'Music',
    data() {
        return {
            filter: '',
        };
    },
    computed: {
        filteredContent() {
            if (this.filter === '') {
                return music;
            }else{
                return _.sortBy(music, this.filter)
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2,
h3 {
    margin-bottom: 20px;
}
h4{
    margin-top: 18px;
}
table {
    width: 100%;
}
th,
td {
    width: 33%;
    text-align: center;
}
tbody {
    tr:last-child {
        td {
            border: none;
        }
    }
    td {
        border-bottom: 1px solid #434b53;
    }
    tr:last-child {
        td {
            border: none;
        }
    }
}
.toggle {
    margin-bottom: 18px;
}
</style>
