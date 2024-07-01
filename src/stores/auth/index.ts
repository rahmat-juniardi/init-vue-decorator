import Constant from "../../configs/Constant.ts";
import SecureStorage from "../../libs/secure-ls/SecureStorage";

import { LoginState, User } from "../../interfaces/user.interface";

function resetState(): LoginState {
    const emptyUser: User = {
        id: 0,
        username: "",
        fullName: "",
        active: false,        
        token: "",
    };

    return {
        user: emptyUser,
        loggedIn: false,
        loadingInit: true,
    }
}

export default {
    state: resetState(),
    mutations: {
        setLoginSucceed(state: LoginState, userData: User) {
            state.user = userData;
            state.loggedIn = true;
            state.loadingInit = false;

            SecureStorage.getInstance().setByKey(Constant.USER_KEY_LS, userData);
        },
        setLoggedOut(state: LoginState) {
            try {
                SecureStorage.getInstance().removeByKey(Constant.USER_KEY_LS);
                state = resetState();
                window.location.href = "/";
            } catch (e) {
                console.log(e);
            }
        }
    },
    actions: {
        initAuth({ commit }: any) {
            try {
                const user = SecureStorage.getInstance().getByKey(Constant.USER_KEY_LS);
                if (!user) {
                    return;
                }

                commit('setLoginSucceed', user);
            } catch (e) {
                console.log(e);
            }
        }
    }
}
