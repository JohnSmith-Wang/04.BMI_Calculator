<template>
  <div>




    <div class="media text-muted pt-3 border-bottom border-gray">
      <tbody style="margin-bottom:10px">
        <tr>
          <td><div :id="getdata.color"></div></td>
          <td width="200px"><strong>{{getdata.result}}</strong></td>
          <td width="200px"><strong>{{getdata.bmi}}(BMI)</strong></td>
          <td width="300px"><strong>身高:</strong> {{getdata.height}}cm</td>
          <td width="800px"><strong>體重:</strong> {{getdata.weight}}kg</td>
          <td id="date" width="200px"><strong>測量日期:</strong> {{getdata.date}}</td>
          <td id="del" width="20px"><strong @click=" destoryItem">X</strong></td>
        </tr>
      </tbody>
    </div>




  </div>
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

<style scoped>
#date {
  font-size: 10px;
}

#del {
font-size: 20px;
color: rgb(230, 88, 88);
cursor: pointer;
}

#red {
  background-color:rgb(230, 34, 34);
  height: 20px;
  width: 10px;
  margin: 5px;
}

#orange {
  background-color:rgb(240, 161, 44);
  height: 20px;
  width: 10px;
  margin: 5px;
}

#yellow {
  background-color:rgb(236, 211, 72);
  height: 20px;
  width: 10px;
  margin: 5px;
}

#pink {
  background-color:rgb(238, 156, 206);
  height: 20px;
  width: 10px;
  margin: 5px;
}

#green {
  background-color:rgb(40, 216, 113);
  height: 20px;
  width: 10px;
  margin: 5px;
}

#blue {
  background-color:rgb(81, 178, 235);
  height: 20px;
  width: 10px;
  margin: 5px;
}

</style>