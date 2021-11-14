import axios from "axios"
import {errors} from "@/utils/errors";
export default {
    namespaced: true,
    state: {
        token: null
    },
    mutations: {
       setToken (state, token) {
           state.token = token
           localStorage.setItem('jwt-auth', token)
       },
        logout () {
            localStorage.removeItem('jwt-auth')
        }
    },
    actions: {
        async login({commit, dispatch}, payload) {
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
                const {data} = await axios.post(url, {...payload, returnSecureToken: true})
                commit('setToken', data.idToken)
                commit('clearMessage', null, {root: true})
            } catch (e) {
                console.log(errors(e.response.data.error.message))
                dispatch('setMessage', {
                    value: errors(e.response.data.error.message),
                    type: 'danger'
                }, {root: true})
                throw new Error()
            }
        }
    },
    getters: {
        token () {
          return localStorage.getItem('jwt-auth') ? localStorage.getItem('jwt-auth') : null
        },
        isAuth: (_, g) => !!g.token
    }
}
