<template>
  <div class="home">
    <div class="banner-swiper">
      <swiper :options="swiperOption" ref="bannerSwiper">
        <!-- slides -->
        <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
          <a :href="slide.href" :style="{backgroundImage:'url('+slide.img+')'}" class="slide-img"></a>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="banner-btn">
        <a href="javascript:;" class="btn-1 hvr-grow"></a>
        <a href="javascript:;" class="btn-2 hvr-grow"></a>
        <a href="javascript:;" class="btn-3 hvr-grow"></a>
      </div>
    </div>
    <div class="col-1">
      <div class="tit"></div>
      <div class="con">
        <div class="point point-1"></div>
        <div class="point point-2"></div>
        <div class="point point-3"></div>
        <div class="point point-4"></div>
      </div>
      <div class="btn">
        <a href="#"></a>
      </div>
    </div>
    <div class="col-2">
      <div class="tit"></div>
      <div class="con"></div>
    </div>
    <div class="col-3">
      <div class="tit"></div>
      <div class="con">
        <ul>
          <li v-for="(item,index) in cardList" :key="index" class="hvr-grow">
            <img :src="item.img" alt srcset>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-4">
      <div class="tit"></div>
      <div class="news">
        <div class="news-t">
          <span>新闻资讯</span>
          <a href="#">更多新闻》</a>
        </div>
        <div class="news-c">
          <div class="newsc-img">
            <ul>
              <li>
                <a href="#">
                  <img src="../assets/img_1.jpg" alt>
                </a>
              </li>
              <li>
                <a href="#">光伏龙头企业竞相迈入组件4.0快车道</a>
              </li>
            </ul>
          </div>
          <div class="newsc-list">
            <div class="item">
              <dl>
                <dd>23</dd>
                <dd>2019-04</dd>
              </dl>
              <ul>
                <li>
                  <a href="#">光伏龙头企业竞相迈入组件4.0快车道</a>
                </li>
                <li>
                  光伏龙头企业竞相迈入组件4.0快车道光伏龙头企业竞相迈入组件4.0
                  快车道光伏龙头企业竞相迈入……
                </li>
              </ul>
            </div>
            <div class="item">
              <dl>
                <dd>23</dd>
                <dd>2019-04</dd>
              </dl>
              <ul>
                <li>
                  <a href="#">光伏龙头企业竞相迈入组件4.0快车道</a>
                </li>
                <li>
                  光伏龙头企业竞相迈入组件4.0快车道光伏龙头企业竞相迈入组件4.0
                  快车道光伏龙头企业竞相迈入……
                </li>
              </ul>
            </div>
            <div class="item">
              <dl>
                <dd>23</dd>
                <dd>2019-04</dd>
              </dl>
              <ul>
                <li>
                  <a href="#">光伏龙头企业竞相迈入组件4.0快车道</a>
                </li>
                <li>
                  光伏龙头企业竞相迈入组件4.0快车道光伏龙头企业竞相迈入组件4.0
                  快车道光伏龙头企业竞相迈入……
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="event-t">
          <span>活动信息</span>
          <a href="#">更多信息》</a>
        </div>
        <div class="event-c"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "home",
  data() {
    return {
      cardList: [
        {
          img: require("../assets/card_1.jpg"),
          href: "/"
        },
        {
          img: require("../assets/card_2.jpg"),
          href: "/"
        },
        {
          img: require("../assets/card_3.jpg"),
          href: "/"
        },
        {
          img: require("../assets/card_4.jpg"),
          href: "/"
        },
        {
          img: require("../assets/card_5.jpg"),
          href: "/"
        },
        {
          img: require("../assets/card_6.jpg"),
          href: "/"
        }
      ],
      swiperSlides: [
        {
          img: require("../assets/banner_1.jpg"),
          href: "/"
        },
        {
          img: require("../assets/banner_1.jpg"),
          href: "/"
        },
        {
          img: require("../assets/banner_1.jpg"),
          href: "/"
        }
      ],
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="less">
@import "../css/animate";
.home {
  min-width: 1200px;
  .banner-swiper {
    height: 900px;
    position: relative;
    a {
      width: 100%;
      height: 900px;
      display: block;
      background-position: center 0;
      background-repeat: no-repeat;
    }
    .banner-btn {
      width: 1200px;
      position: absolute;
      bottom: 90px;
      left: 50%;
      margin-left: -600px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 999;
      a {
        width: 357px;
        height: 256px;
        display: block;
      }
      a.btn-1 {
        background: url("../assets/bannercv_1.png") 0 0 no-repeat;
      }
      a.btn-2 {
        background: url("../assets/bannercv_2.png") 0 0 no-repeat;
      }
      a.btn-3 {
        background: url("../assets/bannercv_3.png") 0 0 no-repeat;
      }
    }
  }
  .col-1 {
    width: 100%;
    height: 662px;
    padding-top: 80px;
    background: url("../assets/ibg_1.jpg") center 0 no-repeat;
    .tit {
      height: 80px;
      background: url("../assets/tit_1.png") center 0 no-repeat;
      margin-bottom: 50px;
    }
    .con {
      width: 1200px;
      height: 288px;
      position: relative;
      margin: 0 auto 50px auto;
      background: url("../assets/con_1.png") center 0 no-repeat;
      .point {
        width: 101px;
        height: 7px;
        overflow: hidden;
        position: absolute;
        top: 168px;
        background-image: url("../assets/point.png");
        background-repeat: no-repeat;
        animation: point 1s steps(1) 0s infinite both;
      }
      .point-1 {
        left: 145px;
      }
      .point-2 {
        left: 412px;
      }
      .point-3 {
        left: 685px;
      }
      .point-4 {
        left: 953px;
      }
    }
    .btn {
      text-align: center;
      a {
        width: 291px;
        height: 65px;
        display: inline-block;
        background: url("../assets/btn_1.png") center 0 no-repeat;
      }
    }
  }
  .col-2 {
    width: 100%;
    height: 956px;
    background: url("../assets/ibg_2.jpg") center 0 no-repeat;
  }
  .col-3 {
    width: 100%;
    height: 1351px;
    padding-top: 110px;
    background: url("../assets/ibg_3.jpg") center 0 no-repeat;
    .tit {
      height: 80px;
      background: url("../assets/tit_3.png") center 0 no-repeat;
      margin-bottom: 50px;
    }
    .con {
      width: 1200px;
      margin: 0 auto;
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          width: 357px;
          height: 466px;
          overflow: hidden;
          margin-bottom: 70px;
          box-shadow: 5px 5px 8px 1px rgba(102, 102, 102, 0.5);
        }
      }
    }
  }
  .col-4 {
    width: 100%;
    height: 1243px;
    padding-top: 90px;
    background: url("../assets/ibg_4.jpg") center 0 no-repeat;
    .tit {
      height: 80px;
      background: url("../assets/tit_4.png") center 0 no-repeat;
      margin-bottom: 20px;
    }
    .news {
      width: 1200px;
      margin: 0 auto 50px auto;
      .news-t {
        height: 32px;
        line-height: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 22px;
        border-bottom: 1px solid #8d8d8d;
      }
    }
    .event {
      width: 1200px;
      margin: 0 auto;
      .event-t {
        height: 32px;
        line-height: 32px;
        display: flex;
        font-size: 22px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #8d8d8d;
      }
    }
  }
}
</style>
