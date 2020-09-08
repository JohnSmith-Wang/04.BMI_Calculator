<template>
  <div class="bmiPage container-fluid">

    <div class="calcArea col-12 col-xl-12">
      <Calculator/>
    </div>

    <hr>

    <div class="listArea col-12 col-xl-8">
      <div class="bmiList">
        <h3>歷史紀錄</h3>
        <table class="table rwdTable">
          <thead>
            <tr>
              <th scope="col">評價</th>
              <th scope="col">BMI</th>
              <th scope="col">身高(cm)</th>
              <th scope="col">體重</th>
              <th scope="col">測量日期</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <Resultlist v-for="index in listIndex" :key="index" :index="index"></Resultlist>
          </tbody>
        </table>
      </div>
      <div class="col-12 cleanBtn">
        <button class="btn btn-md btn-dark" @click="allClean">清除所有紀錄</button>
      </div>
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

<style lang="scss" scoped>
.bmiPage{
 margin: 0px auto;
 padding: 20px;
}

.calcArea{
  margin: 0px auto;
}

.listArea{
  margin: 0px auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  .bmiList{
    margin: 0px auto;
  }
  .cleanBtn{
    text-align: right;
  }
}
</style>