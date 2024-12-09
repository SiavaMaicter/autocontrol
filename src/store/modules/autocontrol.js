import axios from "axios";
const serverRoute = "http://192.168.0.8/removable_control/api";

const state = {
  actions: {},
  module: {},
};
const mutations = {};
const getters = {
  actions: (state) => state.actions,
  module: (state) => state.module,
};
const actions = {
  async getEditableList({ state, dispatch, commit }, data) {
    await axios
      .get(serverRoute + `/EditableList?id=${data.id}`)
      .then((res) => {
        state.actions = res.data.actions;
        state.module = res.data.module;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async getCurrentSettings({ state, dispatch, commit }, actions) {
    console.log(actions);
    await axios.post(serverRoute + `/currentSettings`, { actions: actions, module: state.module }).then((res) => {
      console.log(res.data)
    })
  }
};
export default {
  state,
  mutations,
  getters,
  actions,
};
