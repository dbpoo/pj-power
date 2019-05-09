<template>
  <div class="solutions">
    <div class="banner">
      <h2>
        新能源资产上链、发行、清结算
        <br>系统解决方案提供商
      </h2>
    </div>
    <div class="solutions-1">
      <div class="solution-flex">
        <img src="../assets/solutions_1.jpg" alt class="sotxt">
        <img src="../assets/solutions_1s.jpg" alt class="sohover">
      </div>
      <div class="solution-m">
        <img src="../assets/solutions_1m.jpg" alt="">
      </div>
    </div>
    <div class="solutions-2">
      <div class="solution-flex">
        <img src="../assets/solutions_2s.jpg" alt class="sohover">
        <img src="../assets/solutions_2.jpg" alt class="sotxt">
      </div>
      <div class="solution-m">
        <img src="../assets/solutions_2m.jpg" alt="">
      </div>
    </div>
    <div class="solutions-3">
      <div class="solution-flex">
        <img src="../assets/solutions_3.jpg" alt class="sotxt">
        <img src="../assets/solutions_3s.jpg" alt class="sohover">
      </div>
      <div class="solution-m">
        <img src="../assets/solutions_3m.jpg" alt="">
      </div>
    </div>
    <div class="solutions-4">
      <div class="solution-flex">
        <img src="../assets/solutions_4s.jpg" alt class="sohover">
        <img src="../assets/solutions_4.jpg" alt class="sotxt">
      </div>
      <div class="solution-m">
        <img src="../assets/solutions_4m.jpg" alt="">
      </div>
    </div>
    <div class="solutions-5">
      <div class="solution-flex">
        <img src="../assets/solutions_5.jpg" alt class="sotxt">
        <img src="../assets/solutions_5s.jpg" alt class="sohover">
      </div>
      <div class="solution-m">
        <img src="../assets/solutions_5m.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.solutions {
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
    max-width: 1200px;
    height: 436px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img.sohover {
      display: inline-block;
      vertical-align: middle;
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      transition-duration: 0.5s;
    }
    &:hover {
      img.sohover {
        transform: scale(1.2);
        transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
      }
    }
  }
  .solution-m {
    display: none;
    img {
      width: 100%;
    }
  }
  .solutions-1 {
    background-color: #fff;
  }
  .solutions-2 {
    background-color: #f9f9f9;
  }
  .solutions-3 {
    background-color: #fff;
  }
  .solutions-4 {
    background-color: #f9f9f9;
  }
  .solutions-5 {
    background-color: #fff;
  }
}

@media screen and (max-width: 640px) {
  .solutions .banner {
    height: 340px;
    padding-bottom: 50px;
  }
  .solutions .banner h2 {
    width: 100%;
    font-size: 20px;
  }
  .solutions .solution-flex {
    display: none;
  }
  .solutions .solution-m {
    display: block;
  }
}
</style>
