<template>
  <div>
    <WhiteBoard></WhiteBoard>
  </div>
</template>

<script>
import WhiteBoard from "../components/WhiteBoard";
import bus from "../utils/bus";
export default {
  computed: {
    routeName() {
      return this.$route.name;
    }
  },

  mounted() {
    bus.$emit("off:progress");

    if (this.$route.name == "board") {
      if (this.$route.params.id == undefined) this.$route.params.id = 1;
      this.$store.dispatch("FETCH_LIST", this.$route.params.id);
    } else if (this.$route.name == "category") {
      this.$store.dispatch("FETCH_LIST", this.$route.params);
    }
    this.$store.dispatch("FETCH_CATEGORY");
  },
  components: {
    WhiteBoard
  }
};
</script>

<style scoped>

</style>