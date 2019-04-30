<template>
  <div class="about">
    <div class="banner">
      <h2>
        新能源资产上链、发行、清结算<br>系统解决方案提供商
      </h2>
    </div>
    <div class="about-1"></div>
    <div class="about-2"></div>
    <div class="about-3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.about {
  min-width: 1200px;
  .banner {
    height: 396px;
    padding-top: 77px;
    background: url("../assets/cbanner_about.jpg") center 0 no-repeat;
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
  .about-1 {
    height: 862px;
    background: url("../assets/about_1.jpg") center 0 no-repeat;
  }
  .about-2 {
    height: 652px;
    background: url("../assets/about_2.jpg") center 0 no-repeat;
  }
  .about-3 {
    height: 695px;
    background: url("../assets/about_3.jpg") center 0 no-repeat;
  }
}
@media screen and (max-width: 768px ) {
  .about{
    min-width: 100%;
    .banner{
      height: 300px;
      background-size: cover;
      h2 {
        font-size: 30px;
      }
    }
    .about-1 {
      height: 250px;
      background-size: cover;
    }
    .about-2 {
      height: 200px;
      background-size: cover;
    }
    .about-3 {
      height: 200px;
      background-size: cover;
    }
  }
}
</style>
