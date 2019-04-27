<template>
  <div id="app">
    <div class="nav">
      <div class="nav-flex">
        <div class="nav-logo">
          <router-link to="/">logo</router-link>
        </div>
        <div class="nav-link">
          <router-link to="/solutions">解决方案</router-link>
          <router-link to="/">交易平台</router-link>
          <router-link to="/">研究院</router-link>
          <router-link to="/">新闻动态</router-link>
          <router-link to="/about">关于我们</router-link>
        </div>
      </div>
    </div>
    <router-view/>
    <div class="flink">
      <div class="flink-flex">
        <ul class="ul1">
          <li class="li1">新能博安</li>
          <li class="li2">北京市东城区和平里西街51号雍和宫壹中心</li>
          <li class="li3">010-64268933</li>
        </ul>
        <ul class="ul2">
          <li class="li1">友情链接</li>
          <li class="li2">
            <a href="#" target="_blank">中数能研究院</a>
          </li>
          <li class="li2">
            <a href="#" target="_blank">清华X-lab</a>
          </li>
          <li class="li2">
            <a href="#" target="_blank">哈希未来</a>
          </li>
        </ul>
        <ul class="ul3">
          <li class="li1">全媒体平台</li>
        </ul>
      </div>
    </div>
    <div class="copyright"></div>
  </div>
</template>

<style lang="less">
@import "css/reset";
.nav {
  width: 100%;
  height: 77px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
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
        font-weight: bold;
        &:hover {
          color: #29acf1;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
.flink {
  height: 168px;
  padding-top: 35px;
  background-color: #3a3434;
  .flink-flex {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    ul {
      li {
        color: #fff;
      }
      li.li1 {
        font-size: 18px;
        font-weight: bold;
      }
    }
    ul.ul1 {
      li {
        margin-bottom: 10px;
      }
      li.li2 {
        height: 30px;
        line-height: 30px;
        padding-left: 50px;
        background: url("./assets/icon_address.png") 0 center no-repeat;
      }
      li.li3 {
        height: 30px;
        line-height: 30px;
        padding-left: 50px;
        background: url("./assets/icon_tel.png") 0 center no-repeat;
      }
    }
    ul.ul2 {
      li.li1 {
        margin-bottom: 10px;
      }
      li.li2 {
        margin-bottom: 5px;
        font-size: 14px;
      }
    }
  }
}
.copyright {
  height: 78px;
  background: #3a3434 url("./assets/copyright.png") center center no-repeat;
  border-top: 1px solid #777777;
}
</style>
