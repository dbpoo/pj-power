<template>
  <div class="solutions">
    <div class="banner">
      <h2>新能源资产上链、发行、清结算系统解决方案提供商</h2>
    </div>
    <div class="solutions-container">
      <div class="solutions-1"></div>
      <div class="solutions-2"></div>
      <div class="solutions-3"></div>
      <div class="solutions-4"></div>
      <div class="solutions-5"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.solutions {
  min-width: 1200px;
  .banner {
    height: 396px;
    background: url("../assets/cbanner_solutions.jpg") center 0 no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      width: 920px;
      font-size: 60px;
      text-align: center;
      color: #fff;
    }
  }
  .solutions-1 {
    height: 437px;
    background: #fff url("../assets/solutions_1.jpg") center 0 no-repeat;
  }
  .solutions-2 {
    height: 437px;
    background: #f9f9f9 url("../assets/solutions_2.jpg") center 0 no-repeat;
  }
  .solutions-3 {
    height: 437px;
    background: #fff url("../assets/solutions_3.jpg") center 0 no-repeat;
  }
  .solutions-4 {
    height: 437px;
    background: #f9f9f9 url("../assets/solutions_4.jpg") center 0 no-repeat;
  }
  .solutions-5 {
    height: 437px;
    background: #fff url("../assets/solutions_5.jpg") center 0 no-repeat;
  }
}
@media screen and (max-width: 768px) {
  .solutions {
    min-width: 100%;
    .banner {
      height: 300px;
      padding-top: 77px;
      background-size: cover;
      h2 {
        font-size: 30px;
      }
    }
    .solutions-container{
       padding: 0 30px;
    }
    .solutions-1 {
      height: 130px;
      background-size: cover;
    }
    .solutions-2 {
      height: 100px;
      background-size: cover;
    }
    .solutions-3 {
      height: 130px;
      background-size: cover;
    }
    .solutions-4 {
      height: 110px;
      background-size: cover;
    }
    .solutions-5 {
      height: 130px;
      background-size: cover;
    }
  }
}
</style>
