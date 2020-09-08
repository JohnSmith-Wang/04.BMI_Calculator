<template>
  
  <tr>
    <td scope="col">
      <strong><span class="colorTag" :class="getdata.color">{{getdata.result}}</span></strong>
      <span class="rwddel" @click="destoryItem"><i class="icon text-danger fas fa-trash-alt"></i></span>
    </td>
    <td scope="col" data-title="BMI" class="rwdTitle"><strong>{{getdata.bmi}}</strong></td>
    <td scope="col" data-title="身高" class="rwdTitle">{{getdata.height}}cm</td>
    <td scope="col" data-title="體重" class="rwdTitle">{{getdata.weight}}kg</td>
    <td scope="col" data-title="測量日期" class="rwdTitle">{{getdata.date}}</td>
    <td scope="col" class="del">
      <span @click="destoryItem">
        <i class="fas fa-trash-alt text-danger icon"></i>
      </span>
    </td>
  </tr>

</template>

<script>
export default {
  data(){
    return{
    }
  },
  props:{
    index:{
      type:Number,
      required:true
    }
  },
  methods:{
    destoryItem(){
      if(confirm('確定要刪除此紀錄嗎?')){
        this.$store.commit('DEL_LIST',this.index);
      }
    }
  },
  computed:{
    getdata(){
      return this.$store.state.bmiList[this.index]
    }
  }
}
</script>

<style lang="scss" scoped>
.colorTag{
  border-left-style: solid;
  border-left-width: 10px;
  padding: 5px;
}

.icon{
  border:solid 1px;
  padding: 5px;
  border-radius: 5px;
}

.del,.rwddel {
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
}

/*色碼選擇器設定*/
.red {
  border-left-color:rgb(230, 34, 34);
}

.orange {
  border-left-color:rgb(240, 161, 44);
}

.yellow {
  border-left-color:rgb(236, 211, 72);
}

.pink {
  border-left-color:rgb(238, 156, 206);
}

.green {
  border-left-color:rgb(40, 216, 113);
}

.blue {
  border-left-color:rgb(81, 178, 235);
}

</style>