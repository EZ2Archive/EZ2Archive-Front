import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as api from '../api'

Vue.use(Vuex)

const matchKeyList = {
  '4K': 'FOUR',
  '5K': 'FIVE',
  '6K': 'SIX',
  '8K': 'EIGHT',
}

export default new Vuex.Store({
  state: {
    currentTheme: 0,
    themes:[
      {
        index: 0,
        name: "PP",
        color: {
            primary: "#473395",
            accent: "#ff6b99",
            secondary: "#E3DBFF",
            success: "#a5d64c",
            info: "#ff53d0",
            warning: "#ff8e00",
            error: "#ff5252"
        }
      },
      {
        index: 1,
        name: "TT",
        color: {
            primary: "#ffa450",
            accent: "#a1e754",
            secondary: "#92de4e",
            success: "#6dff74",
            info: "#7365ff",
            warning: "#2e8ac0",
            error: "#ff5e3c"
        }
      }
    ],
    token: null,
    currentUser: null
  },
  getters:{
    isAuth: state => {
      return !!state.token
    },
  },
  mutations: {
    setCurrentTheme(state, data){
      state.currentTheme = data
    },
    login (state, {token, userid}){
      console.log(userid)
      if(!token) return
      state.token = token
      state.currentUser = userid
      localStorage.setItem('token', token)
      api.setAuthInHeader(token)
    },
    logout(state){
      state.token = null
      state.currentUser = null
      delete localStorage.token
      api.setAuthInHeader(null)
    }
  },
  actions: {
    login({commit}, {userid, password}) {

      return api.auth.login(userid, password)
        .then((result) => {
          console.log(result)
          commit('login', {token: result.data.accessToken, userid: userid})
        })
        .catch((err) => {
          console.log(err)
          alert('로그인 실패')
        })
    },
    getAchievementList({commit}, {key, level}){
      
      return api.achievement.list(matchKeyList[key], level)
    }
  },
  modules: {
  },
  plugins:[createPersistedState()]
})
