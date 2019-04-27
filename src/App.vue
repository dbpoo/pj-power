<template>
  <div id="app">
    <div id="nav">
      <div class="nav-flex">
        <div class="nav-logo">
          <router-link to="/">logo</router-link>
        </div>
        <div class="nav-link">
          <router-link to="/">解决方案</router-link>
          <router-link to="/">交易平台</router-link>
          <router-link to="/">研究院</router-link>
          <router-link to="/">新闻动态</router-link>
          <router-link to="/">关于我们</router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
@import "css/reset";
#nav {
  height: 78px;
  background: url("./assets/top.jpg") center 0 no-repeat;
  .nav-flex {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-logo {
      a {
        width: 148px;
        height: 77px;
        display: block;
        background: url("./assets/logo.png") 0 0 no-repeat;
        text-indent: -9999px;
      }
    }
    .nav-link {
      a {
        margin: 0 20px;
        color: #fff;
        &:hover{
          color: #29acf1;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
