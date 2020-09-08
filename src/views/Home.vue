<template>

  <main class="mainArea container-fluid">
    <div class="col-12 col-xl-6">
      <h4>★ 練習項目</h4>
      <ul>
        <li>Locale Stoarge 應用</li>
        <li>Vuex 應用</li>
      </ul>
    </div>
    <div class="col-12 col-xl-6">
      <h4>★ 功能簡述</h4>
      <ul>
        <li>計算BMI數值</li>
        <li>使用紀錄會被記錄到Local Storge</li>
        <li>使用者下次使用相同瀏覽器時，會讀取上一次的紀錄</li>
        <li>點擊該紀錄兩下，會詢問是否刪除該筆紀錄</li>
        <li>提供 「清除所有紀錄」 的功能</li>
      </ul>
    </div>
    <div class="col-12 col-xl-6">
      <h4>★ 更新履歷</h4>
      <ul>
        <li>8/01 初次建立</li>
        <li>8/25 更新RWD功能，歷史紀錄介面重新設計，修正按鈕顏色跑掉的BUG</li>
        <li>9/07 修正CSS的ID選擇器名稱重複的問題</li>
      </ul>
    </div>
  </main>

</template>

<style lang="scss" scoped>
.mainArea{
  div{
    margin: 30px auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    li{
      margin: 10px auto;
    }    
  }
}
</style>