<template>
  <div>
    <div class="btn" :class="[actionStyle]" @click="sendRequest(action)">
      {{ action.discription }}
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  props: ["action"],
  setup(props) {
    const actionStyle = reactive({
      "btn-primary": true,
      disabled: props.action.access == "R" ? true : false,
    });
    return { actionStyle };
  },
  mounted() {
    console.log(this.action);
  },
  methods: {
    sendRequest(action) {
      this.$store.dispatch("sentRequest", action);
    },
  },
};
</script>

<style></style>
