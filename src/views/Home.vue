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
        <a href="javascript:;" class="btn-1"></a>
        <a href="javascript:;" class="btn-2"></a>
        <a href="javascript:;" class="btn-3"></a>
      </div>
    </div>
    <div class="col-1"></div>
    <div class="col-2"></div>
    <div class="col-3">
      <div class="tit"></div>
      <div class="con">
        <ul>
          <li v-for="(item,index) in cardList" :key="index">
            <img :src="item.img" alt srcset>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-4"></div>
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
        &:hover{
          animation: pulse 1s;
        }
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
    background: url("../assets/ibg_1.jpg") center 0 no-repeat;
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
    background: url("../assets/ibg_4.jpg") center 0 no-repeat;
  }
}
</style>
