import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: {
      id: "",
      isHot: "",
      nm: "",
      py: ""
    },
    eat:{
      title:""
    },
    cinema: {
      nm: "",
      shows: {},
      desc: "",
      sc: ""
    }
  },
  mutations: {
    localCity(state, obj) {
      this.state.city.id = obj.id
      this.state.city.isHot = obj.isHot
      this.state.city.nm = obj.nm
      this.state.city.py = obj.py
    },
    cinemaInfo(state, obj) {
      this.state.cinema.nm = obj.nm
      this.state.cinema.shows = obj.shows
      this.state.cinema.desc = obj.desc
      this.state.cinema.sc = obj.sc

    },
    eatInfo(state,obj){
      
    }
  },
  actions: {

  }
})