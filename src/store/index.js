import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS = {
  save(data){
    localStorage.setItem('bmi-list',JSON.stringify(data))
  },
  load(){
    return JSON.parse(localStorage.getItem('bmi-list') || '[]')
  }
}

export default new Vuex.Store({
  strict:true,
  state: {
    bmiList:[
      {result:'過胖',bmi:'25',height:'150',weight:'50',color:'red',date:'5-5-2020'},
      {result:'過輕',bmi:'20',height:'140',weight:'40',color:'red',date:'5-6-2020'},
      {result:'肥胖',bmi:'10',height:'130',weight:'30',color:'red',date:'5-7-2020'},
    ]
  },
  getters:{
    listIndex(state){
      return state.bmiList.map(item => state.bmiList.indexOf(item));
    }
  },
  mutations: {
    SET_LIST(state,data){
      state.bmiList = data;
      LS.save(state.bmiList);
    },
    ADD_LIST(state,data){
      state.bmiList.push(data);
      LS.save(state.bmiList);
    },
    DEL_LIST(state,index){
      state.bmiList.splice(index,1);
      LS.save(state.bmiList);
    }
  },
  actions: {
    INIT_LIST({commit}){
      commit('SET_LIST',LS.load())
    }
  },
})
