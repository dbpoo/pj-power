<template>
  <div class="home">
    <div class="banner-swiper">
      <swiper :options="swiperOption" ref="bannerSwiper" v-if="bannerSlides.length > 0">
        <!-- slides -->
        <swiper-slide v-for="(slide, index) in bannerSlides" :key="index">
          <div :style="{ backgroundImage: 'url(' + slide + ')' }" class="slide-img"></div>
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
      <div class="tit">
        <span>
          <i>新能源资产价值流通服务</i>
        </span>
      </div>
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
    <div class="col-5">
      <div class="tit">
        <span>
          <i>新闻动态</i>
        </span>
      </div>
      <div class="more">
        <router-link to="/list">更多新闻》</router-link>
      </div>
      <div class="news">
        <div class="news-c" v-if="newList.length > 0">
          <div class="newsc-img">
            <ul>
              <li>
                <a href="javascript:;" @click="toDetail(newTop.id)">
                  <img
                    :src="
                      newTop.img
                        ? newTop.img
                        : 'http://www.xinnengboan.com/assets/img/default.jpg'
                    "
                    alt
                  >
                </a>
              </li>
              <li>
                <a href="javascript:;" @click="toDetail(newTop.id)" v-html="newTop.tit"></a>
              </li>
            </ul>
          </div>
          <div class="newsc-list">
            <div class="item" v-for="(item, index) in newList" :key="index">
              <dl>
                <dd class="dd1">{{ getD(item.date) }}</dd>
                <dd class="dd2">{{ getYM(item.date) }}</dd>
              </dl>
              <ul>
                <li class="li1">
                  <a href="javascript:;" @click="toDetail(item.id)" v-html="item.title.rendered"></a>
                </li>
                <li class="li2" v-html="item.excerpt.rendered"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="tit">
        <span>
          <i>“阳光照见爱”我们在行动</i>
        </span>
      </div>
      <div class="con">
        <a class="light" :class="'light-' + item" v-for="(item, index) in lightArr" :key="index">
          <span class="sp1"></span>
          <span class="sp2"></span>
        </a>
      </div>
    </div>
    <div class="col-3">
      <div class="tit">
        <span>
          <i>项目展示</i>
        </span>
      </div>
      <div class="con">
        <ul>
          <li v-for="(item, index) in cardList" :key="index" class="hvr-grow">
            <img :src="item.img" alt srcset>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-4">
      <div class="tit">
        <span>
          <i>活动信息</i>
        </span>
      </div>
      <div class="event">
        <div class="event-c">
          <swiper :options="swiperEventOption" ref="eventSwiper">
            <!-- slides -->
            <swiper-slide v-for="(slide, index) in eventSlides" :key="index">
              <ul>
                <li class="li1">
                  <img :src="slide.img" alt>
                </li>
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
import _ from "loadsh";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "home",
  data() {
    return {
      lightArr: [100, 60, 150, 75, 120],
      newList: [],
      newTop: {
        id: "",
        tit: "",
        img: ""
      },
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
          img: require("../assets/eventimg_1.jpg"),
          href: "/"
        },
        {
          img: require("../assets/eventimg_2.jpg"),
          href: "/"
        },
        {
          img: require("../assets/eventimg_3.jpg"),
          href: "/"
        }
      ],
      bannerSlides: [],
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
          depth: 200,
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
      let arr = time.split("T")[0].split("-");
      return arr[0] + "-" + arr[1];
    },
    getD(time) {
      let arr = time.split("T")[0].split("-");
      return arr[2];
    },
    getNewsList() {
      this.$get("wp/v2/posts").then(res => {
        this.newList = _.slice(res, 0, 3);

        if (this.newList.length > 0) {
          this.newTop.id = this.newList[0].id;
          this.newTop.tit = this.newList[0].title.rendered;
          this.newTop.img = this.newList[0].better_featured_image
            ? this.newList[0].better_featured_image.source_url
            : "";
        }
      });
    },
    getBannerSlider() {
      this.$get("smartslider3/v1/sliders/2").then(res => {
        this.bannerSlides = res.html;
      });
    },
    toDetail(id) {
      this.$router.push({
        path: "detail",
        query: {
          id: id
        }
      });
    }
  },
  mounted() {
    this.getBannerSlider();
    this.getNewsList();
  }
};
</script>

<style lang="less">
@import "../css/animate";
.home {
  min-width: 1200px;
  .banner-swiper {
    position: relative;
    .slide-img {
      width: 100%;
      height: 900px;
      display: block;
      background-position: center 0;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .swiper-pagination {
      bottom: 33px;
    }
    .swiper-pagination-bullet {
      width: 17px;
      height: 17px;
      margin: 0 10px;
      background: #c0c0c0;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #2fccf6;
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
        background-size: contain;
      }
      a.btn-2 {
        background: url("../assets/bannercv_2.png") 0 0 no-repeat;
        background-size: contain;
      }
      a.btn-3 {
        background: url("../assets/bannercv_3.png") 0 0 no-repeat;
        background-size: contain;
      }
    }
  }
  .col-1 {
    width: 100%;
    height: 662px;
    padding-top: 80px;
    background: url("../assets/ibg_1.jpg") center 0 no-repeat;
    .tit {
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
      color: #fff;
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
  }
  .col-3 {
    width: 100%;
    height: 1351px;
    padding-top: 110px;
    background: url("../assets/ibg_3.jpg") center 0 no-repeat;
    .tit {
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
    padding-top: 90px;
    padding-bottom: 40px;
    background: url("../assets/ibg_4.jpg") center 0 no-repeat;
    .tit {
      margin-bottom: 0;
    }
    .event {
      width: 1200px;
      margin: 0 auto;
      .event-c {
        padding-top: 80px;
        .swiper-slide {
          width: 687px;
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
          width: 687px;
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
  .col-5 {
    width: 100%;
    padding-top: 90px;
    padding-bottom: 80px;
    background: url("../assets/ibg_4.jpg") center 0 no-repeat;
    .tit {
      margin-bottom: 20px;
      position: relative;
    }
    .more {
      width: 1200px;
      margin: 0 auto;
      text-align: right;
      padding-top: 20px;
      font-size: 20px;
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
        padding-top: 20px;
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
            height: 110px;
            overflow: hidden;
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
                height: 30px;
                line-height: 30px;
                overflow: hidden;
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
  }
}

@media screen and (max-width: 1440px) {
  .home .banner-swiper .slide-img {
    height: 700px;
  }
  .home .banner-swiper .banner-btn {
    width: 900px;
    margin-left: -450px;
    bottom: 120px;
  }
  .home .banner-swiper .banner-btn a {
    width: 250px;
    height: 179px;
  }
}
</style>
