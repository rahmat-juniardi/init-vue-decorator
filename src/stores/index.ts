import { createStore } from "vuex";
import auth from "./auth";
import { LoginState } from "../interfaces/user.interface";

const store = createStore({
  modules: {
    auth,
  },
  getters: {
    token(state: { auth: LoginState }) {
      return state.auth.user.token || '';
    }
  }
});

export default store;
