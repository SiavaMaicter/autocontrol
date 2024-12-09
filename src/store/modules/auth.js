import router from "@/router";
import axios from "axios";
const serverRoute = "http://192.168.0.8";
const authRoute = "/removable_control/api/auth";

const state = {
  auth: null,
  authError: null,
};
const mutations = {
  setAuth(state, auth) {
    state.email = auth.email;
    state.auth = true;
    localStorage.setItem("user_token", auth.auth_token);
  },
  setAuthException(state, error) {
    state.authError = error;
    state.auth = false;
    router.push({ name: "AuthPage" });
  },
  unsetAuthException(state) {
    state.authError = null;
  },
};
const getters = {
  authError: (state) => state.authError,
  auth: (state) => state.auth,
};
const actions = {
  LoginAction({ commit, dispatch, state }, data) {
    axios
      .post(serverRoute + authRoute, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        commit("setAuth", res.data);
        router.push(localStorage.getItem("redirectAfterLogin"));
      })
      .catch((err) => {
        commit("setAuthException", {
          message: err.response.data.message,
          errorLevel: "fatal",
          status: err.response.data.status,
          exception: err.response.data.trace,
        });
      });
  },
  async RefreshAction({ commit, dispatch, state }, data) {
    return await axios
      .get(serverRoute + authRoute + `?token=${data.token}`, {
        token: data.token,
      })
      .then((res) => {
        commit("setAuth", res.data);
        return true;
      })
      .catch((err) => {
        console.log(err);
        state.auth = false;
        return false;
      });
  },
};
export default {
  state,
  mutations,
  getters,
  actions,
};
