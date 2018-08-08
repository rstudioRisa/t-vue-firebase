import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userData: null,

    },
    getters: {
        isLogin: state => state.userData !== null,
        user: state => {
            console.log(state.userData);
            return state.userData;
        }
    },
    mutations: {
        setUserData: (state, payload) => {
            state.userData = payload.user
        },

    },
    actions: {
        async login({commit}) {
            await firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());

        },
        async logout ({commit, state}) {
            await firebase.auth().signOut();
            commit("setUserData", {user:null});
        }

    }
})
