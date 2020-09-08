<template>
  
  <form class="calcPanel" @keyup.enter="submitHandler">
    <div class="bmiTitle">
      <h3>BMI 計算機</h3>
    </div>

    <div class="form-label-group">
      <input type="text" id="inputHeight" class="form-control" placeholder="請輸入你的身高" v-model="Height" :disabled="isResult" onkeyup="value=value.replace(/[^\d]/g,'')">
      <label for="inputHeight">請輸入你的身高 (cm)</label>
    </div>

    <div class="form-label-group">
      <input type="text" id="inputWeight" class="form-control" placeholder="請輸入你的體重"  v-model="Weight" :disabled="isResult" onkeyup="value=value.replace(/[^\d]/g,'')">
      <label for="inputWeight">請輸入你的體重 (kg)</label>
    </div>

    <div class="btnArea">

      <div v-if="isResult" class="row justify-content-between">
        <span id="customBtn" class="btn btn-lg col-8 customText" :class="btncolor">
          {{yourRange}} ({{yourBMI}})
        </span>
        <button type="button" class="btn btn-lg btn-dark col-3" @click="cancel">
          <i class="fas fa-undo"></i>
        </button>
      </div>

      <div v-else class="row justify-content-between">
        <button type="button" class="btn btn-lg btn-dark col-12" @click="submitHandler">
          開始計算
        </button>
      </div>

    </div>

    <p style="font-size:15px" class="text-danger" v-if="isCheck">請確實填寫資料!!</p>
 
  </form>
  
</template>

<script>
export default {
  data(){
    return{
      Height:'',
      Weight:'',
      btncolor: '',
      yourBMI:'',
      yourRange:'',
      isResult:false,
      isCheck:false
    }
  },
  methods:{
    submitHandler(){
      if(!this.Height){
        this.isCheck = true
        return
      }
      else if(!this.Weight){
        this.isCheck = true
        return
      }
      const BMI = this.getbmi();
      const Result = this.getjudge(BMI);
      const Color = this.getColor(Result);
      const nowDate = this.getdate();

      this.getbtncolor(Result);
      this.yourBMI = BMI;
      this.yourRange = Result;
      this.isCheck = false;
      this.isResult = true;
      this.$store.commit('ADD_LIST',{
        result: Result,
        bmi: BMI,
        height: this.Height,
        weight: this.Weight,
        color: Color,
        date: nowDate
      });
 
    },
    getbmi(){
      const vm = this;
      const fixHeight = vm.Height / 100;
      const result =  vm.Weight / (fixHeight * fixHeight)
      const fixResult = result.toFixed(1)

      return fixResult;
    },
    getjudge(data){
      if(data >= 35){
        return '重度肥胖'
      }
      else if(30 <= data && data <35){
        return '中度肥胖'
      }
      else if(27 <= data && data < 30){
        return '輕度肥胖'
      }
      else if(24 <= data && data < 27){
        return '肥胖'
      }
      else if(18.5 <= data && data < 24){
        return '健康'
      }
      else{
        return '過輕'
      }
    },
    getColor(data){
      switch (data) {
        case '重度肥胖':
          return 'red';

        case '中度肥胖':
          return 'pink';

        case '輕度肥胖':
          return 'orange';

        case '肥胖':
          return 'yellow';

        case '健康':
          return 'green';

        case '過輕':
          return 'blue';
      }
    },
    getdate(){
      const time = new Date();
      const day = time.getDate();
      const month = time.getMonth()+1;
      const year = time.getFullYear();
      const date = month + "-" + day + "-" + year

      return date    
    },
    cancel(){
      this.isResult = false;
      this.btncolor = '';
      this.Height = '';
      this.Weight = '';
    },
    getbtncolor(data){
      switch(data){
        case '重度肥胖':
          return this.btncolor = 'bg-danger';
        case '中度肥胖':
          return this.btncolor = 'bg-pink';
        case '輕度肥胖':
          return this.btncolor = 'bg-orange';
        case '肥胖':
          return this.btncolor ='bg-yellow';
        case '健康':
          return this.btncolor ='bg-success';
        case '過輕':
          return this.btncolor ='bg-primary';
      }
    }
  },
}
</script>>

<style lang="scss" scoped>
.calcPanel{
  max-width: 420px;
  padding: 15px;
  margin: auto;
  .bmiTitle{
    text-align: center;
    margin: 20px auto;
  }
}

.btnArea{
  margin: 0px auto;
  max-width: 360px;
}



/*結果標籤客製化*/
#customBtn{
  cursor: default;
}

.bg-yellow{
  background-color: rgb(236, 211, 72);
}

.bg-pink{
  background-color: rgb(238, 156, 206);
}

.bg-orange{
  background-color: orange;
}

.bg-danger, .bg-success, .bg-primary{
  color:white;
}

.bg-orange, .bg-pink, .bg-yellow{
  color: black;
}
/* */


.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  height: 3.125rem;
  padding: .75rem;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; 
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; 
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color: #777;
}
</style>