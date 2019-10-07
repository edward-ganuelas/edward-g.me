<template>
    <div class="col-12 col-sm-10">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-8">
                    <h3>Music</h3>
                </div>
                <div class="col-12 col-sm-8">
                    <p>I like music, I listen to music everyday to switch modes or prepare for a certain mindset. If I'm working on a mundane tasks I keep it on to keep my head energized. I also listen to music to prepare myself so that I can focus and ususally when I reach that state then the music stops.</p>
                    <p>I listen to all kinds of music though I primarily listent to classic Rock and Rap. I sometimes listen to Disney music and I'm not particulary found of EDM or country. </p>
                    <p>Some of my favorite classic acts are AC/DC, Queen, Tupac, and Eminem</p>
                    <p>I'm one of the rare unicorns that uses Google Play Music and the following playlist is my auto 'Thumbs Up' playlist, a collection of random song from different genres and different artist. The way the playlist works is that songs in the top of the list is the newest one I liked.</p>
                </div>
                <div class="col-12 col-sm-8">
                    <h4>Thumbs Up</h4>
                </div>
                <div class="col-12 col-sm-8">
                    <p>Sort</p>
                    <div class="btn-group btn-group-toggle">
                        <label class="btn bnw btn-secondary" v-bind:class="{active: filter === ''}">
                            <input type="radio" name="options" id="clear" autocomplete="off" v-model="filter" value=""> Clear
                        </label>
                        <label class="btn colour btn-secondary" v-bind:class="{active: filter === 'title'}">
                            <input type="radio" name="options" id="title" autocomplete="off" v-model="filter" value="title"> 
                            Title
                        </label>
                        <label class="btn colour btn-secondary" v-bind:class="{active: filter === 'artist'}">
                            <input type="radio" name="options" id="artist" autocomplete="off" v-model="filter" value="artist"> 
                            Artist
                        </label>
                        <label class="btn colour btn-secondary" v-bind:class="{active: filter === 'album'}">
                            <input type="radio" name="options" id="album" autocomplete="off" v-model="filter" value="album"> 
                            Album
                        </label>
                    </div>
                </div>
                <div class="col-12 col-sm-8">
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
import music from "../../copy/music";
import _ from 'lodash';
export default {
    name: "Music",
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
table {
    width: 100%;
    margin-bottom: 100px;
    margin-top: 50px;
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
    // &:last-child{
    //   border: none;
    // }
  }
  tr:last-child {
    td {
        border: none;
    }
  }
  // tr:nth-child(odd){
  //   background-color: #434b53;
  //   color: #FFF;
  //   td{
  //     border-right: 1px solid #FFF;
  //   }
  // }
  
}
</style>
