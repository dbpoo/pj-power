<template>
  <div class="solutions">
    <div class="banner">
      <h2>新能源资产上链、发行、清结算<br>系统解决方案提供商</h2>
    </div>
    <div class="solutions-1">
      <div class="solution-flex">
        <img src="../assets/solutions_1.jpg" alt class="sotxt">
        <img src="../assets/solutions_1s.jpg" alt class="sohover">
      </div>
    </div>
    <div class="solutions-2">
      <div class="solution-flex">
        <img src="../assets/solutions_2s.jpg" alt class="sohover">
        <img src="../assets/solutions_2.jpg" alt class="sotxt">
      </div>
    </div>
    <div class="solutions-3">
      <div class="solution-flex">
        <img src="../assets/solutions_3.jpg" alt class="sotxt">
        <img src="../assets/solutions_3s.jpg" alt class="sohover">
      </div>
    </div>
    <div class="solutions-4">
      <div class="solution-flex">
        <img src="../assets/solutions_4s.jpg" alt class="sohover">
        <img src="../assets/solutions_4.jpg" alt class="sotxt">
      </div>
    </div>
    <div class="solutions-5">
      <div class="solution-flex">
        <img src="../assets/solutions_5.jpg" alt class="sotxt">
        <img src="../assets/solutions_5s.jpg" alt class="sohover">
      </div>
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
  .solution-flex {
    width: 1200px;
    height: 436px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      img.sohover {
        animation: zoom 0.5s forwards;
      }
    }
  }
  .solutions-1 {
    height: 437px;
    background-color: #fff;
  }
  .solutions-2 {
    height: 437px;
    background-color: #f9f9f9;
  }
  .solutions-3 {
    height: 437px;
    background-color: #fff;
  }
  .solutions-4 {
    height: 437px;
    background-color: #f9f9f9;
  }
  .solutions-5 {
    height: 437px;
    background-color: #fff;
  }
}
</style>
