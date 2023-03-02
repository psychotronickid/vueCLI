import { createStore } from 'vuex'
import axios from "axios";
import router from "@/router";

export default createStore({
    state: {
        token: localStorage.getItem('myAppToken') || '',
        typeToken: 'Bearer ',
        API: 'https://jurapro.bhuser.ru/api-shop/',
        cart: [],
        order: [],
        cartCount: 0,
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    mutations: {
        AUTH_SUCCESS: (state, token) => {
            state.token = token;
        },
        AUTH_ERROR: (state) => {
            state.token = '';
        },
        CART_UPDATE: (state, load) => {
            state.cart = load
            state.cartCount = load.length
        },
        CART_CHACH: (state, load) => {
            state.cart = []
            state.cartCount = 0
        },
        ORDER_UPDATE:(state, load) => {
            state.order = load
        }
    },
    actions: {
        async SIGN_IN({commit}, user) {
            try {
                await axios.post(this.state.API + 'login', user).then((response) => {
                    commit('AUTH_SUCCESS', response.data.data.user_token)
                    if (this.state.token) {
                        axios.defaults.headers.common["Authorization"] = 'Bearer ' + this.state.token
                    } else {
                        axios.defaults.headers.common["Authorization"] = ''
                    }
                    localStorage.setItem('MyAppToken', this.state.token)
                    router.push('/')
                })
            } catch (e) {
                commit('AUTH_ERROR');
                localStorage.removeItem('MyAppToken');
            }
        },
        async SIGN_UP({commit}, user) {
            try {
                await axios.post(this.state.API + 'signup', user).then((response) => {
                    commit('AUTH_SUCCESS', response.data.data.user_token)
                    localStorage.setItem('MyAppToken', this.state.token)
                    router.push('/')
                })
            } catch (e) {
                commit('AUTH_ERROR');
                localStorage.removeItem('MyAppToken');
            }
        },
        async SIGN_OUT() {
            this.state.token = ''
            localStorage.removeItem('MyAppToken')
            await axios.post(this.state.API + `logout`, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer ' + this.state.token
                }
            })
        },
        async ADD_TO_CART({commit}, product_id) {
            await axios.post(this.state.API + 'cart/' + product_id,  {}, {headers: {Authorization: this.state.typeToken + this.state.token}})
        },
        async GET_CART({commit}) {
            await axios.get(this.state.API + 'cart', {headers: {Authorization: this.state.typeToken + this.state.token}}).then((response) => {
                    commit('CART_UPDATE', response.data.data)
                })
        },
        async REMOVE_CART({commit}, product_id) {
            await axios.delete(this.state.API + 'cart/' + product_id,  {headers: {Authorization: this.state.typeToken + this.state.token}})
        },
        async TO_ORDER({commit}) {
            await axios.post(this.state.API + 'order' , {}, {headers: {Authorization: this.state.typeToken + this.state.token}})
                .then((response) => {
                    commit('CART_CHACH', response.data.data)
                })
        },
        async GET_ORDER({commit}) {
            await axios.get(this.state.API + 'order', {headers: {Authorization: this.state.typeToken + this.state.token}})
                .then((response) => {
                    commit('ORDER_UPDATE', response.data.data)
                })
        },
    },
})