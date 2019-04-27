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
        <a class="light" :class="'light-'+item" v-for="(item,index) in lightArr" :key="index">
          <span class="sp1"></span>
          <span class="sp2"></span>
        </a>
      </div>
      <div class="con-mobile">
        <span class="light" :class="'light-'+item" v-for="(item,index) in lightArr" :key="index"></span>
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
          <!-- <a href="#">更多新闻》</a> -->
        </div>
        <div class="news-c">
          <div class="newsc-img">
            <ul>
              <li>
                <a href="javascript:;" @click="toDetail(newList[0])">
                  <img src="../assets/img_1.jpg" alt>
                </a>
              </li>
              <li>
                <a href="javascript:;" @click="toDetail(newList[0])">光伏龙头企业竞相迈入组件4.0快车道</a>
              </li>
            </ul>
          </div>
          <div class="newsc-list">
            <div class="item" v-for="(item,index) in newList" :key="index">
              <dl>
                <dd class="dd1">{{getD(item.time)}}</dd>
                <dd class="dd2">{{getYM(item.time)}}</dd>
              </dl>
              <ul>
                <li class="li1">
                  <a href="javascript:;" @click="toDetail(item)">{{item.tit}}</a>
                </li>
                <li class="li2">
                  {{item.con}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="event-t">
          <span>活动信息</span>
          <!-- <a href="#">更多信息》</a> -->
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
      lightArr: [100, 60, 150, 75, 120],
      newList: [
        {
          id: 1,
          tit: "光伏龙头企业竞相迈入组件4.0快车道",
          con:
            "光伏龙头企业竞相迈入组件4.0快车道光伏龙头企业竞相迈入组件4.0 快车道光伏龙头企业竞相迈入……",
          time: "2019-04-22"
        },
        {
          id:2,
          tit: "多省已启动光伏平价上网项目申报 首批项目有望年内落地",
          con:
            "国家能源局在上周连续发布了多项重要政策。4月10日，国家能源局发布《关于推进风电、光伏发电……",
          time: "2019-04-23"
        },
        {
          id: 3,
          tit: "国家能源局下达十三五第二批光伏扶贫项目 总装机规模达167万千瓦",
          con:
            "4月19日，国家能源局网站发布《国家能源局 国务院扶贫办关于下达“十三五”第二批光伏扶贫项目计……",
          time: "2019-04-27"
        }
      ],
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
  },
  methods: {
    getYM(time) {
      let arr = time.split('-');
      return arr[0] + "-" + arr[1]
    },
    getD(time) {
      let arr = time.split('-');
      return arr[2]
    },
    toDetail(item) {
      this.$router.push({
        path: 'detail',
        query: {
          id: item.id
        }
      })
    }
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
        cursor: pointer;
        span.sp1 {
          width: 75px;
          height: 75px;
          display: block;
          background: url("../assets/light.png") 0 0 no-repeat;
          animation: pulse 1s infinite;
        }
      }
      .light-100 {
        top: 88px;
        left: 1000px;
        span.sp2 {
          width: 440px;
          height: 257px;
          display: none;
          position: absolute;
          right: 50px;
          top: -50px;
          z-index: 99;
          background: url("../assets/map_100.png") 0 0 no-repeat;
        }
        &:hover {
          span.sp2 {
            animation: zoomIn 0.2s;
            display: block;
          }
        }
      }
      .light-60 {
        top: 184px;
        left: 760px;
        span.sp2 {
          width: 349px;
          height: 251px;
          display: none;
          position: absolute;
          right: 50px;
          top: -50px;
          background: url("../assets/map_60.png") 0 0 no-repeat;
        }
        &:hover {
          span.sp2 {
            animation: zoomIn 0.2s;
            display: block;
          }
        }
      }
      .light-150 {
        top: 408px;
        left: 632px;
        span.sp2 {
          width: 444px;
          height: 266px;
          display: none;
          position: absolute;
          right: 50px;
          bottom: 50px;
          background: url("../assets/map_150.png") 0 0 no-repeat;
        }
        &:hover {
          span.sp2 {
            animation: zoomIn 0.2s;
            display: block;
          }
        }
      }
      .light-75 {
        top: 532px;
        left: 600px;
        span.sp2 {
          width: 438px;
          height: 269px;
          display: none;
          position: absolute;
          left: 50px;
          bottom: 50px;
          background: url("../assets/map_75.png") 0 0 no-repeat;
        }
        &:hover {
          span.sp2 {
            animation: zoomIn 0.2s;
            display: block;
          }
        }
      }
      .light-120 {
        top: 576px;
        left: 506px;
        span.sp2 {
          width: 448px;
          height: 266px;
          display: none;
          position: absolute;
          right: 50px;
          bottom: 50px;
          background: url("../assets/map_120.png") 0 0 no-repeat;
        }
        &:hover {
          span.sp2 {
            animation: zoomIn 0.2s;
            display: block;
          }
        }
      }
    }
    .con-mobile {
      display: none;
      .light {
        display: block;
      }
      .light-100 {
        width: 100%;
        height: 257px;
        background: url("../assets/map_100.png") 0 0 no-repeat;
        background-size: contain;
      }
      .light-60 {
        width: 100%;
        height: 340px;
        background: url("../assets/map_60.png") 0 0 no-repeat;
        background-size: contain;
      }
      .light-150 {
        width: 100%;
        height: 266px;
        background: url("../assets/map_150.png") 0 0 no-repeat;
        background-size: contain;
      }
      .light-75 {
        width: 100%;
        height: 269px;
        background: url("../assets/map_75.png") 0 0 no-repeat;
        background-size: contain;
      }
      .light-120 {
        width: 100%;
        height: 300px;
        background: url("../assets/map_120.png") 0 0 no-repeat;
        background-size: contain;
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

@media screen and (max-width: 768px) {
  .home {
    min-width: 100%;
    .banner-swiper {
      height: auto;
      .slide-img {
        height: 400px;
        background-size: cover;
      }
      .banner-btn {
        width: 100%;
        padding: 0 20px;
        left: 0;
        bottom: 50px;
        margin-left: 0;
        a {
          width: 120px;
          height: 86px;
        }
        a.btn-1 {
          background-size: contain;
        }
        a.btn-2 {
          background-size: contain;
        }
        a.btn-3 {
          background-size: contain;
        }
      }
    }
    .col-1 {
      height: auto;
      padding-top: 30px;
      padding-bottom: 30px;
      .con {
        width: 90%;
        height: 150px;
        margin: 0 auto;
        background-size: contain;
        .point {
          display: none;
        }
      }
    }
    .col-2 {
      height: auto;
      background: #04142c;
      .con {
        display: none;
      }
      .con-mobile {
        display: block;
      }
    }
    .col-3 {
      height: auto;
      padding-top: 30px;
      .con {
        width: 100%;
        ul {
          justify-content: center;
          li {
            margin-bottom: 30px;
          }
        }
      }
    }
    .col-4 {
      height: auto;
      padding-top: 30px;
      .news {
        width: 100%;
        padding: 0 15px;
        margin-bottom: 15px;
        .news-c {
          padding-top: 30px;
          flex-wrap: wrap;
          .newsc-img {
            width: 100%;
            margin-bottom: 30px;
            ul {
              li {
                img {
                  width: 100%;
                }
              }
            }
          }
          .newsc-list {
            width: 100%;
            .item {
              dl {
                width: 200px;
                padding-right: 20px;
                flex: 1 1 auto;
              }
            }
          }
        }
      }
      .event {
        width: 100%;
        padding: 0 15px;
        .event-c {
          padding: 30px 0;
        }
      }
    }
  }
}
</style>
