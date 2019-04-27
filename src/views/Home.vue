<template>
  <div class="home">
    <div class="banner-swiper">
      <swiper :options="swiperOption" ref="bannerSwiper">
        <!-- slides -->
        <swiper-slide v-for="(slide,index) in bannerSlides" :key="index">
          <div :style="{backgroundImage:'url('+slide.img+')'}" class="slide-img"></div>
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
        <router-link to="/solutions"></router-link>
      </div>
    </div>
    <div class="col-2">
      <div class="tit"></div>
      <div class="con">
        <div class="light light-100"></div>
        <div class="light light-60"></div>
        <div class="light light-150"></div>
        <div class="light light-75"></div>
        <div class="light light-120"></div>
        <a class="light-hover light-hover-100"><span></span></a>
        <a class="light-hover light-hover-60"><span></span></a>
        <a class="light-hover light-hover-150"><span></span></a>
        <a class="light-hover light-hover-75"><span></span></a>
        <a class="light-hover light-hover-120"><span></span></a>
      </div>
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
                <dd class="dd1">23</dd>
                <dd class="dd2">2019-04</dd>
              </dl>
              <ul>
                <li class="li1">
                  <a href="#">光伏龙头企业竞相迈入组件4.0快车道</a>
                </li>
                <li class="li2">
                  光伏龙头企业竞相迈入组件4.0快车道光伏龙头企业竞相迈入组件4.0
                  快车道光伏龙头企业竞相迈入……
                </li>
              </ul>
            </div>
            <div class="item">
              <dl>
                <dd class="dd1">23</dd>
                <dd class="dd2">2019-04</dd>
              </dl>
              <ul>
                <li class="li1">
                  <a href="#">光伏龙头企业竞相迈入组件4.0快车道</a>
                </li>
                <li class="li2">
                  光伏龙头企业竞相迈入组件4.0快车道光伏龙头企业竞相迈入组件4.0
                  快车道光伏龙头企业竞相迈入……
                </li>
              </ul>
            </div>
            <div class="item">
              <dl>
                <dd class="dd1">23</dd>
                <dd class="dd2">2019-04</dd>
              </dl>
              <ul>
                <li class="li1">
                  <a href="#">光伏龙头企业竞相迈入组件4.0快车道</a>
                </li>
                <li class="li2">
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
        <div class="event-c">
          <swiper :options="swiperEventOption" ref="eventSwiper">
            <!-- slides -->
            <swiper-slide v-for="(slide,index) in eventSlides" :key="index">
              <ul>
                <li class="li1">
                  <img :src="slide.img" alt>
                </li>
                <li class="li2">{{slide.txt}}</li>
              </ul>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
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
      eventSlides: [
        {
          img: require("../assets/eventimg.jpg"),
          href: "/",
          txt: "光伏龙头企业竞相迈入组件4.0快车道"
        },
        {
          img: require("../assets/eventimg.jpg"),
          href: "/",
          txt: "光伏龙头企业竞相迈入组件4.0快车道"
        },
        {
          img: require("../assets/eventimg.jpg"),
          href: "/",
          txt: "光伏龙头企业竞相迈入组件4.0快车道"
        },
        {
          img: require("../assets/eventimg.jpg"),
          href: "/",
          txt: "光伏龙头企业竞相迈入组件4.0快车道"
        },
        {
          img: require("../assets/eventimg.jpg"),
          href: "/",
          txt: "光伏龙头企业竞相迈入组件4.0快车道"
        }
      ],
      bannerSlides: [
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
      },
      swiperEventOption: {
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
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
    .slide-img {
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
    padding-top: 60px;
    background: url("../assets/ibg_2.jpg") center 0 no-repeat;
    .tit {
      height: 80px;
      background: url("../assets/tit_2.png") center 0 no-repeat;
    }
    .con {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      .light {
        width: 70px;
        height: 70px;
        position: absolute;
        background: url("../assets/light.png") 0 0 no-repeat;
        animation: pulse 1s infinite;
        z-index: 0;
      }
      .light-100 {
        top: 88px;
        left: 1000px;
      }
      .light-60 {
        top: 184px;
        left: 760px;
      }
      .light-150 {
        top: 408px;
        left: 632px;
      }
      .light-75 {
        top: 532px;
        left: 600px;
      }
      .light-120 {
        top: 576px;
        left: 506px;
      }
      .light-hover {
        width: 70px;
        height: 70px;
        display: block;
        position: absolute;
        z-index: 999;
        cursor: pointer;
      }
      .light-hover-100 {
        top: 88px;
        left: 1000px;
        span {
          width: 440px;
          height: 257px;
          display: none;
          position: absolute;
          right: 50px;
          top: -50px;
          background: url("../assets/map_100.png") 0 0 no-repeat;
        }
        &:hover {
          animation: zoomIn .5s;
          span {
            display: block;
          }
        }
      }
      .light-hover-60 {
        top: 184px;
        left: 760px;
        span {
          width: 349px;
          height: 251px;
          display: none;
          position: absolute;
          right: 60px;
          top: -60px;
          background: url("../assets/map_60.png") 0 0 no-repeat;
        }
        &:hover {
          animation: zoomIn .5s;
          span {
            display: block;
          }
        }
      }
      .light-hover-150 {
        top: 408px;
        left: 632px;
        span {
          width: 444px;
          height: 266px;
          display: none;
          position: absolute;
          right: 50px;
          bottom: 50px;
          background: url("../assets/map_150.png") 0 0 no-repeat;
        }
        &:hover {
          animation: zoomIn .5s;
          span {
            display: block;
          }
        }
      }
      .light-hover-75 {
        top: 532px;
        left: 600px;
        span {
          width: 438px;
          height: 269px;
          display: none;
          position: absolute;
          left: 60px;
          bottom: 50px;
          background: url("../assets/map_75.png") 0 0 no-repeat;
        }
        &:hover {
          animation: zoomIn .5s;
          span {
            display: block;
          }
        }
      }
      .light-hover-120 {
        top: 576px;
        left: 506px;
        span {
          width: 448px;
          height: 266px;
          display: none;
          position: absolute;
          right: 60px;
          bottom: 60px;
          background: url("../assets/map_120.png") 0 0 no-repeat;
        }
        &:hover {
          animation: zoomIn .5s;
          span {
            display: block;
          }
        }
      }
    }
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
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 22px;
        border-bottom: 1px solid #8d8d8d;
      }
      .news-c {
        padding-top: 55px;
        display: flex;
        justify-content: space-between;
        .newsc-img {
          width: 474px;
          ul {
            li {
              text-align: center;
              img {
                width: 474px;
                height: 291px;
              }
              a {
                color: #484848;
                &:hover {
                  color: #29acf1;
                }
              }
            }
          }
        }
        .newsc-list {
          width: 665px;
          .item {
            display: flex;
            justify-content: space-between;
            dl {
              width: 83px;
              text-align: center;
              dd.dd1 {
                color: #29acf1;
                font-size: 64px;
                line-height: 1;
              }
              dd.dd2 {
                color: #29acf1;
                font-size: 18px;
              }
            }
            ul {
              width: 566px;
              font-size: 20px;
              margin-bottom: 25px;
              li.li1 {
                font-size: 20px;
                margin-bottom: 10px;
                a {
                  color: #484848;
                  &:hover {
                    color: #29acf1;
                  }
                }
              }
              li.li2 {
                font-size: 18px;
                color: #878787;
              }
            }
          }
        }
      }
    }
    .event {
      width: 1200px;
      margin: 0 auto;
      .event-t {
        height: 40px;
        line-height: 40px;
        display: flex;
        font-size: 22px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #8d8d8d;
      }
      .event-c {
        padding-top: 80px;
        .swiper-slide {
          width: 594px;
          ul {
            li.li1 {
              width: 100%;
            }
            li.li2 {
              display: none;
            }
          }
        }
        .swiper-slide-prev,
        .swiper-slide-next {
          width: 594px;
          height: 338px;
          overflow: hidden;
        }
        .swiper-slide-active {
          ul {
            li.li2 {
              display: block;
              text-align: center;
            }
          }
        }
        .swiper-container-3d .swiper-slide-shadow-left {
          background-image: linear-gradient(
            to left,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0)
          );
        }
        .swiper-container-3d .swiper-slide-shadow-right {
          background-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0)
          );
        }
      }
    }
  }
}
</style>
