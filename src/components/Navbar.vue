<template>

  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <span class="navbar-brand">BMI計算機</span>
    <button class="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbar-content" 
            aria-controls="navbar-content" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbar-content">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact>介紹</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/bmi">成品</router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>