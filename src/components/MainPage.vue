<template>
  <div>MAIN PAGE!!!!!</div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("TestAction", {
      token: localStorage.getItem("user_token").toString(),
    });
  },
};
</script>