<template>
  <div v-if="actions">
    <div v-for="action in actions" :key="action.name">
      <!-- <ul class="list-group list-group-numbered">
        <li class="list-group-item">{{ action.name }}</li>
        <li class="list-group-item">{{ action.data_type }}</li>
        <li class="list-group-item">{{ action.access }}</li>
        <li class="list-group-item">{{ action.discription }}</li>
      </ul> -->
      <ActionButton :action="action" v-if="action.data_type === 'bool'" />
      <ActionInput :action="action" v-if="action.data_type === 'word'" />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import ActionButton from "./actions/Button.vue";
import ActionInput from "./actions/Input.vue";
export default {
  async mounted() {
    await this.$store.dispatch("getEditableList", {
      id: this.$route.params.id,
    });
    this.$store.dispatch("getCurrentSettings", this.actions);
  },
  computed: {
    actions() {
      return this.$store.getters.actions;
    },
    module() {
      return this.$store.getters.module;
    },
  },
  components: {
    ActionButton,
    ActionInput,
  },
};
</script>

<style></style>
