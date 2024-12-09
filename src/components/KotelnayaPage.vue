<template>
  <div v-if="controllable">
    {{ controllable.name }}
  </div>
  <div v-else>
    <div>Kotelnaya {{ this.$route.params.id }}</div>
    <div>
      <ActionComponent />
    </div>
  </div>
</template>
<script>
import ActionComponent from "./elements/ActionComponent.vue";
export default {
  mounted() {
    // this.$store.dispatch("getEditableList", {
    //   id: this.$route.params.id,
    // });
    // this.$store.dispatch("getCurrentDiscreteMap", {
    //   id: this.$route.params.id,
    // });
  },
  computed: {
    controllable() {
      this.$store.getters.controllable;
    },
  },
  components: {
    ActionComponent,
  },
};
</script>
