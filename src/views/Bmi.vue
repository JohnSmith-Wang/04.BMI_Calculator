<template>
  <div>

<div>
    <Calculator/>
</div>

<hr>

<div>
  <main role="main" class="container">
    <div class="my-3 p-3 bg-white rounded shadow-sm">
      <h6 class="border-bottom border-gray pb-2 mb-0">歷史紀錄</h6>

        <Resultlist v-for="index in listIndex" :key="index" :index="index"></Resultlist>

      <small class="d-block text-right mt-3">
        <button class="btn btn-sm btn-dark" @click="allClean">清除所有紀錄</button>
      </small>
    </div>
  </main>
</div>

  </div>
</template>

<script>
import Calculator from "@/components/Calculator.vue"
import Resultlist from "@/components/Resultlist.vue"

export default {
    components:{
      Calculator,
      Resultlist
    },
    computed:{
      listIndex(){
        return this.$store.getters['listIndex'];
      }
    },
    methods:{
      allClean(){
        if(confirm('確定要刪除全部的紀錄嗎?')){
          this.$store.commit('SET_LIST',[]);
        }
      }
    },
    mounted(){
      this.$store.dispatch('INIT_LIST')
    }
}
</script>