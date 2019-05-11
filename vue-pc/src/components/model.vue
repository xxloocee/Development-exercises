<template>
  <div class="model-wrap">
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
  },
  name: "model",
  data() {
    return {
    }
  },
  methods: {
    ...mapActions([
    ])
  },
  watch: {
  },
  computed: {
    ...mapGetters([
    ])
  },
  created() {
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/variables';
  @import '../assets/scss/mixins';
  .model-wrap {
    width: 100%;
    height: 200px;
    background: red;
    @include box-shoadow($btn-active-box-shadow);
  }
</style>