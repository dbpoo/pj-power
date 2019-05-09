<template>
  <div id="app">
    <div class="nav">
      <div class="nav-flex">
        <div class="nav-logo">
          <router-link to="/">logo</router-link>
        </div>
        <div class="nav-swith">
          <span class="swith-on" v-show="!isShow" @click="toggleMenu"></span>
          <span class="swith-off" v-show="isShow" @click="toggleMenu"></span>
        </div>
        <div class="nav-link" v-show="isShow">
          <a
            v-for="(item,index) in nav"
            :key="index"
            @click="goto(item.path,index)"
            :class="index==curindex? 'active' : '' "
          >{{item.name}}</a>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <router-view/>
    </div>
    <div class="flink">
      <div class="flink-flex">
        <ul class="ul1">
          <li class="li2">北京市东城区和平里西街51号雍和宫壹中心</li>
          <li class="li3">010-64268933</li>
        </ul>
        <ul class="ul2">
          <li class="li1">友情链接</li>
          <li class="li2">
            <a href="javascript:;">国研智库</a>
          </li>
          <li class="li2">
            <a href="javascript:;">清华X-lab</a>
          </li>
          <li class="li2">
            <a href="javascript:;">中数能研究院</a>
          </li>
          <li class="li2">
            <a href="javascript:;">中简律师事务所</a>
          </li>
        </ul>
        <ul class="ul3">
          <li class="li1">全媒体平台</li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <span>Copyright © 国研新能科技有限公司 版权所有 备案号 京ICP备19014207号</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      curindex: -1,
      screenWidth: document.body.clientWidth,
      nav: [
        {
          path: "home",
          name: "首页"
        },
        {
          path: "solutions",
          name: "解决方案"
        },
        {
          path: "download",
          name: "交易平台"
        },
        {
          path: "school",
          name: "新能研究院"
        },
        {
          path: "list",
          name: "新闻动态"
        },
        {
          path: "about",
          name: "关于我们"
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isShow = !this.isShow;
    },
    goto(path, index) {
      this.curindex = index;
      if (this.screenWidth < 768) {
        this.isShow = false;
      }
      this.$router.push({ name: path });
    }
  },
  watch: {
    screenWidth(val) {
      if (val < 768) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        that.screenWidth = document.body.clientWidth;
      })();
    };
    if (this.screenWidth < 768) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }
};
</script>


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
  position: fixed;
  .nav-flex {
    max-width: 1200px;
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
    .nav-swith {
      width: 77px;
      height: 77px;
      display: none;
      .swith-on {
        width: 77px;
        height: 77px;
        display: block;
        background: url("./assets/switch.png") center center no-repeat;
      }
      .swith-off {
        width: 77px;
        height: 77px;
        display: block;
        background: url("./assets/close.png") center center no-repeat;
      }
    }
    .nav-link {
      a {
        margin: 0 20px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          color: #29acf1;
        }
        &:last-child {
          margin-right: 0;
        }
      }
      a.active {
        font-weight: bold;
        color: #29acf1;
      }
    }
  }
}
.flink {
  padding: 35px 0;
  background-color: #3a3434;
  .flink-flex {
    max-width: 1200px;
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
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #b0b0b0;
  background-color: #3e3e3e;
  border-top: 1px solid #777777;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  min-height: 77px;
}

@media screen and (max-width: 640px) {
  .nav {
    .nav-logo {
      margin-left: 10px;
    }
    .nav-flex {
      .nav-swith {
        display: block;
      }
      .nav-link {
        position: absolute;
        top: 77px;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        a {
          margin: 0;
          padding: 0 20px;
          height: 60px;
          line-height: 60px;
        }
      }
    }
  }
  .flink {
    padding: 0;
  }
  .flink .flink-flex {
    flex-direction: column;
  }
  .flink .flink-flex ul {
    padding: 20px;
    border-top: 1px solid #777777;
  }
  .flink .flink-flex ul.ul1 {
    padding-bottom: 10px;
  }
  .copyright {
    font-size: 12px;
  }
}
</style>
