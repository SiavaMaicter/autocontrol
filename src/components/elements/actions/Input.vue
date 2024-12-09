<template>
  <div class="mb-3">
    <label class="form-label">{{ action.discription }}</label>
    <input
      type="text"
      class="form-control"
      :class="[actionStyle]"
      v-bind:readonly="actionStyle.readonly"
      :placeholder="'---'"
    />
    <!-- :value="someValue ? someValue : null" -->
  </div>
  <button class="btn btn-primary" v-if="!actionStyle.readonly">
    SUBMIT THIS POEBEN'
  </button>
</template>

<script>
import { reactive } from "vue";
export default {
  props: ["action"],
  setup(props) {
    const actionStyle = reactive({
      "aria-label": props.action.access === "R" ? "Readable" : "Writable",
      readonly: props.action.access === "R" ? true : false,
    });
    console.log(props);
    return {
      actionStyle,
    };
  },
};
</script>

<style></style>
