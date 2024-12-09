<template>
  <div>
    <div class="mb-3">
      <label for="" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        name=""
        id="email"
        v-model="email"
        aria-describedby="emailHelpId"
        placeholder="abc@mail.com"
      />
      <small id="emailHelpId" class="form-text text-muted">Help text</small>
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        name=""
        v-model="password"
        id="pass"
        placeholder=""
      />
    </div>

    <button type="button" class="btn btn-outline-primary" @click="Login()">
      ACTION
    </button>
    <button type="button" class="btn btn-outline-primary" @click="CheckToken()">
      CHECK TOKEN
    </button>
  </div>
</template>
<script>
import ValidationService from "./scripts/validation/ValidationService";
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    Login() {
      let validation = new ValidationService(this.email, this.password);
      let check = validation.CheckEmptyValue();
      if ("email" in check || "password" in check) {
        this.$store.commit("setAuthException", {
          message: check.email ? check.email : check.password,
        });
        return false;
      }
      check = validation.CheckValidations();
      if ("ex" in check) {
        this.$store.commit("setAuthException", {
          message: check.ex,
        });
        return false;
      }
      this.$store.dispatch("LoginAction", {
        email: this.email,
        password: this.password,
      });
    },
    CheckToken() {
      this.$store.dispatch("RefreshAction", {
        token: localStorage.getItem("user_token").toString(),
      });
    },
  },
};
</script>