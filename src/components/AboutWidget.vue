<template>
  <div class="aboutWidget row">
    <div class="col-12">
      <h2>A Random Fact About Me</h2>
      
    </div>
    <div class="col-6">
      <p>{{content}}</p>
    </div>
    <div class="col-6">
      <button @click="setContent" class="btn btn-light"><i class="fas fa-sync-alt"></i></button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import About from "../copy/about";
export default {
  name: "AboutWidget",
  data() {
    return {
      content: ""
    };
  },
  methods: {
    getRandomContent() {
      const randomNumer = _.random(0, About.length -1);
      return About[randomNumer];
    },
    setContent() {
      this.content = this.getRandomContent();
    }
  },
  mounted() {
    this.setContent();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aboutWidget {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
