<template>
  <div class="AuthError">
    <div class="alert alert-danger alert-dismissible fade show">
      {{ authError.message }}
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="unsetError"
      ></button>
      <button
        v-if="authError.exception"
        class="btn btn-outline-danger"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#ErrorDisc"
        aria-expanded="false"
        aria-controls="ErrorDisc"
      >
        Показать подробности
      </button>
      <div class="collapse" id="ErrorDisc">
        {{ authError.exception }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    unsetError() {
      this.$store.commit("unsetAuthException");
    },
  },
  computed: {
    authError() {
      return this.$store.getters.authError;
    },
  },
};
</script>

<style>
.AuthError {
  position: absolute;
  width: 400px;
  height: 400px;
  max-height: 800px;
  margin: -200px 0 0 -200px;
  top: 50%;
  left: 50%;
  text-align: center;
}
</style>