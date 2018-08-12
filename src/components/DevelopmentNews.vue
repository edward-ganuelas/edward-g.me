<template>
  <div class="row developmentNews">
    <div class="container">
      <div class="row" v-if="content !== ''">
        <div class="col-12">
          <h2>Development News</h2>
        </div>
        <div class="col-12">
          <h3>{{content.title}}</h3>
          <p>{{content.excerpt}}</p>
          <p>Read More from the <a :href="blogLink" target="_blank" rel="noopener noreferrer" @click="tracking('eightrayedsun blog')">eightrayedsun blog</a></p>
        </div>
      </div>
      <spinner :spin="spin" />
    </div>
    
  </div>
</template>

<script>
import _ from "lodash";
import { DIRECTUS, DIRECTUS_BLOG } from "../api/apis";
import Spinner from './Spinner';
import axios from 'axios';

export default {
  name: "DevelopmentNews",
  components:{
    Spinner
  },
  data() {
    return {
      content: "",
      spin: false
    };
  },
  methods: {
    tracking(site) {
      this.$ga.event({
        eventCategory: `Clicked ${site}`,
        eventAction: "click"
      });
    }
  },
  computed: {
    blogLink() {
      const title = _.kebabCase(this.content.title);
      return `https://blog.eightrayedsun.com/#/post/${title}?id=${
        this.content.id
      }`;
    }
  },
  mounted() {
    (async () => {
      try {
        this.spin = true;
        const response = await axios.get(`${DIRECTUS}${DIRECTUS_BLOG}?limit=1&order[published_date]=DESC`);
        this.content = response.data.data;
        this.spin = false;
      } catch (e) {
        console.log(e);
        this.spin = false;
      }
    })();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.developmentNews{
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
