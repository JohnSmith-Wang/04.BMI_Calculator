<template>
  <div>

    <form class="form-signin">
  <div class="text-center mb-4">
    <h1 class="h3 mb-3 font-weight-normal">BMI 計算機</h1>
  </div>

  <div class="form-label-group">
 
    <input type="text" id="inputHeight" class="form-control" placeholder="請輸入你的身高" v-model="Height" :disabled="isResult" onkeyup="value=value.replace(/[^\d]/g,'')">
    <label for="inputHeight">請輸入你的身高 (cm)</label>
  </div>

  <div class="form-label-group">
    <input type="text" id="inputWeight" class="form-control" placeholder="請輸入你的體重"  v-model="Weight" :disabled="isResult" onkeyup="value=value.replace(/[^\d]/g,'')">
    <label for="inputWeight">請輸入你的體重 (kg)</label>
  </div>

  <span v-if="isResult" id="customlabel" class="btn btn-lg col-8" :class="btncolor">{{yourRange}} ({{yourBMI}})</span>
  <span class="col-1"></span>
  <button type="button" v-if="isResult" class="btn btn-lg  btn-dark col-3" @click="cancel">返回</button>
  <button type="button" v-else class="btn btn-lg btn-dark btn-block"  @click="submitHandler">開始計算</button>

  <p style="font-size:15px" class="text-danger" v-if="isCheck">請確實填寫資料!!</p>
  <p style="font-size:15px" v-if="isResult">再點一次返回</p>
 

</form>


  </div>
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
          return 'orange';

        case '輕度肥胖':
          return 'yellow';

        case '肥胖':
          return 'pink';

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
          return this.btncolor = 'btn-danger';
        case '中度肥胖':
          return this.btncolor = 'btn-warning';
        case '輕度肥胖':
          return this.btncolor = 'btn-yellow';
        case '肥胖':
          return this.btncolor ='btn-pink';
        case '健康':
          return this.btncolor ='btn-success';
        case '過輕':
          return this.btncolor ='btn-primary';
      }
    }
  },
}
</script>>

<style lang="scss" scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

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
@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}

#customlabel{
  cursor: default;
  pointer-events: none;
}

</style>