import { createStore } from "vuex";
import auth from "@/store/modules/auth";
import autocontrol from "./modules/autocontrol.js";
const store = createStore({
  modules: {
    auth,
    autocontrol,
  },
});
export default store;
