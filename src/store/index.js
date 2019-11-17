import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	 num_num:100
  },
  mutations: {
  	 addnum(state,paylod){
  	 	state.num_num += paylod.n;
  	 }
  },
  getters:{
  	 filter_Num(state){
  	 	return state.num_num > 120 ? 120 : state.num_num
  	 }
  },
  actions: {
  	add_num({commit}){
       commit("addnum",{n:5})
  	}
  },
  modules: {
  }
})
