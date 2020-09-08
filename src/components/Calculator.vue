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
        <span id="customBtn" class="btn btn-lg col-8 customText" :class="labelColor">
          {{Range}} ({{BMI}})
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

    <p class="null-warning" v-if="nullCheck">請確實填寫資料!!</p>
 
  </form>
  
</template>

<script>
export default {
  data(){
    return{
      Height:'',
      Weight:'',
      Resultcolor:'',
      BMI:'',
      Range:'',
      Date:'',

      labelColor: '',
      isResult:false,
      nullCheck:false
    }
  },
  methods:{
    submitHandler(){
      if(!this.Height || !this.Weight){
        this.nullCheck = true
        return
      }
      
      this.bmiHandler();
      this.rangeHandler(this.BMI);
      this.dateHandler();

      this.nullCheck = false;
      this.isResult = true;

      this.$store.commit('ADD_LIST',{
        result: this.Range,
        bmi: this.BMI,
        height: this.Height,
        weight: this.Weight,
        color: this.Resultcolor,
        date: this.Date
      });
 
    },
    bmiHandler(){
      let fixHeight = this.Height / 100;
      let result =  (this.Weight / (fixHeight * fixHeight)).toFixed(1);
      this.BMI = result;
    },
    rangeHandler(data){
      if(data >= 35){
        this.Range = '重度肥胖';
        this.Resultcolor = 'red';
        this.labelColor = 'bg-danger'
      }
      else if(30 <= data && data <35){
        this.Range = '中度肥胖';
        this.Resultcolor = 'pink';
        this.labelColor = 'bg-pink'
      }
      else if(27 <= data && data < 30){
        this.Range = '輕度肥胖';
        this.Resultcolor = 'orange';
        this.labelColor = 'bg-orange'
      }
      else if(24 <= data && data < 27){
        this.Range = '肥胖';
        this.Resultcolor = 'yellow';
        this.labelColor = 'bg-yellow'
      }
      else if(18.5 <= data && data < 24){
        this.Range = '健康';
        this.Resultcolor = 'green';
        this.labelColor = 'bg-success'
      }
      else{
        this.Range = '過輕';
        this.Resultcolor = 'blue';
        this.labelColor = 'bg-primary'
      }
    },
    dateHandler(){
      let nowTime = new Date();
      let year = nowTime.getFullYear();
      let month = nowTime.getMonth()+1;
      let day = nowTime.getDate();

      let result = month + "-" + day + "-" + year;

      this.Date = result;
    },
    cancel(){
      this.isResult = false;
      this.Height = '';
      this.Weight = '';
    },
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

.null-warning{
  margin: 10px auto;
  font-size: 15px;
  color: rgb(216, 14, 14);
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


/*計算機動態輸入 */
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