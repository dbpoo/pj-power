<template>
  <div class="school-wrapper">
    <div class="banner">
      <h2>新能源数权经济发展中心</h2>
    </div>
    <div class="school-1">
      <div class="tit">
        <span>
          <i>中心简介</i>
        </span>
      </div>
      <div class="con">
        <p>
          数字经济已经成为全球发展重要驱动力。习近平总书记在2018年第26次APEC领导
          人会议上提出，数字经济是亚太乃至全球未来的发展方向。以区块链为代表的新一代信息技术正在影响全球数字经济发展。
        </p>
        <p>新能源数权经济发展中心以数字经济高速发展为背景，以新能源实体产业创新研究为命题，聚合数字经济3.0相关政、学、研、创、产、投、媒七个领域专家，利用区块链技术与新能源产业应用场景相结合，赋能新能源实体经济，打造全球数字经济3.0生态价值平台，促进全球数字经济健康有序发展。</p>
      </div>
    </div>
    <div class="school-2">
      <div class="tit">
        <span>
          <i>研究领域</i>
        </span>
      </div>
      <div class="con">
        <ul class="ul1">
          <li class="li1">理论研究</li>
          <li class="li2">邀请国务院发展研究中心、相关部委机构的专家，联合高校和科研机构，围绕区块链和信息化过程中的基础性理论进行持续性研究与探讨</li>
        </ul>
        <ul class="ul2">
          <li class="li1">示范项目</li>
          <li class="li2">与地方政府、行业协会、产业龙头合作开展新能源产业“上链行动”示范性项目，例如光伏产业上链等；组建专项研究院，进行创新性选题和长期评估。</li>
        </ul>
        <ul class="ul3">
          <li class="li1">技术创新</li>
          <li class="li2">在示范性项目开展过程中，不断推动新能源前沿核心技术和基础性材料的创新发展，打造开放性的基础科技与应用科技融合生态系统。</li>
        </ul>
      </div>
      <div class="tit">
        <span>
          <i>产业服务</i>
        </span>
      </div>
      <div class="con">
        <ul class="ul4">
          <li class="li1">投资孵化</li>
          <li
            class="li2"
          >发挥国研智库、清华x-lab在各自领域的资源优势，为面向未来的新能源前沿核心科技创新项目接入创业培训、孵化、加速营、创投金融扶持、全球科创资本上市等服务。</li>
        </ul>
        <ul class="ul5">
          <li class="li1">人才培养</li>
          <li class="li2">依托未来大学进行人才培养，为政府、产业、教育系统开发培训体系，组织创新训练营，为新能源产业发展源源不断的输送人才。</li>
        </ul>
        <ul class="ul6">
          <li class="li1">传播交流</li>
          <li class="li2">
            引导政府与社会对新能源产业建立正确认知，开展讲座、沙龙、培训班等活动，合作开展智库思想传播；开展围绕技术和项目的国际交流与合
            作。
          </li>
        </ul>
      </div>
    </div>
    <div class="school-3">
      <div class="tit">
        <span>
          <i>中心简介</i>
        </span>
      </div>
      <div class="con">
        <ul class="ul1">
          <li class="li1">
            <span></span>
            <b>新能源数权经济研究院</b>
          </li>
          <li class="li2">围绕区块链和信息化基础性理论性研究，提出和完善数权经济赋能实体理论体系，推动数字经济领域高速健康发展。</li>
        </ul>
        <ul class="ul2">
          <li class="li1">
            <span></span>
            <b>新能源数权经济实验室</b>
          </li>
          <li class="li2">由国研智库、清华x-lab共同发起，利用区块链3.0为代表的新一代信息技术与行业场景结合，赋能实体打造全球数字经济3.0创新平台。</li>
        </ul>
        <ul class="ul3">
          <li class="li1">
            <span></span>
            <b>新能源数权经济全球生态联盟</b>
          </li>
          <li class="li2">
            联合性的全球性的研究、创新、交流、合作联盟。
            联盟下设生态发展委员会和数据共识委员会。
          </li>
        </ul>
        <ul class="ul4">
          <li class="li1">
            <span></span>
            <b>新能源数权经济全球案例平台</b>
          </li>
          <li class="li2">以活动征集形势，由行业产业专家进行案例推荐，在全球范围内，精选出优秀案例，最终形成“案例集”并在平台统一传播。</li>
        </ul>
      </div>
    </div>
    <div class="school-4">
      <div class="tit">
        <span>
          <i>联盟成员</i>
        </span>
      </div>
      <div
        class="con"
      >新能源数权经济发展中心由国研智库创新科学园与青藤链盟发起设立，联合中国教育智库、交通传思智库、新能区块链共同筹备，构建数权经济（数字经济3.0）理论创新与实践创新平台。</div>
      <div class="school-swiper">
        <swiper :options="swiperEventOption" ref="eventSwiper">
          <!-- slides -->
          <swiper-slide v-for="(slide, index) in eventSlides" :key="index">
            <ul>
              <li class="li1">
                <img :src="slide.img" alt>
              </li>
            </ul>
          </swiper-slide>
        </swiper>
        <!-- Optional controls -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      eventSlides: [
        {
          img: require("../assets/schoolslider_1.jpg"),
          href: "/"
        },
        {
          img: require("../assets/schoolslider_2.jpg"),
          href: "/"
        },
        {
          img: require("../assets/schoolslider_3.jpg"),
          href: "/"
        },
        {
          img: require("../assets/schoolslider_4.jpg"),
          href: "/"
        }
      ],
      swiperEventOption: {
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 400,
          modifier: 1,
          slideShadows: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="less">
.school-wrapper {
  .banner {
    height: 473px;
    padding-top: 77px;
    background: url("../assets/cbanner_school.jpg") center 0 no-repeat;
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
  .school-1 {
    height: 700px;
    background: url("../assets/schoolbg_1.jpg") center 0 no-repeat;
    padding-top: 60px;
    .con {
      max-width: 1200px;
      margin: 0 auto;
      padding-left: 310px;
      color: #747474;
      font-size: 24px;
      text-indent: 48px;
      p {
        margin-bottom: 15px;
      }
    }
  }
  .school-2 {
    height: 1237px;
    background: url("../assets/schoolbg_2.jpg") center 0 no-repeat;
    .con {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      ul {
        width: 385px;
        height: 402px;
        background-color: rgba(255, 255, 255, 0.6);
        li.li1 {
          padding-top: 180px;
          padding-bottom: 20px;
          text-align: center;
          font-size: 26px;
          color: #555454;
        }
        li.li2 {
          font-size: 20px;
          color: #747474;
          padding: 0 20px;
        }
      }
      ul.ul1 {
        background-image: url(../assets/schoolicon_1.png);
        background-repeat: no-repeat;
        background-position: center 30px;
      }
      ul.ul2 {
        background-image: url(../assets/schoolicon_2.png);
        background-repeat: no-repeat;
        background-position: center 30px;
      }
      ul.ul3 {
        background-image: url(../assets/schoolicon_3.png);
        background-repeat: no-repeat;
        background-position: center 30px;
      }
      ul.ul4 {
        background-image: url(../assets/schoolicon_4.png);
        background-repeat: no-repeat;
        background-position: center 30px;
      }
      ul.ul5 {
        background-image: url(../assets/schoolicon_5.png);
        background-repeat: no-repeat;
        background-position: center 30px;
      }
      ul.ul6 {
        background-image: url(../assets/schoolicon_6.png);
        background-repeat: no-repeat;
        background-position: center 30px;
      }
    }
  }
  .school-3 {
    height: 856px;
    padding-top: 45px;
    .con {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      ul {
        width: 50%;
        height: 290px;
        li.li1 {
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          flex-direction: column;
          margin-bottom: 10px;
          font-size: 26px;
          color: #484848;
          transition: 0s all;
          span {
            width: 120px;
            height: 120px;
            display: inline-block;
            margin-bottom: 10px;
            font-size: 26px;
          }
          i {
            display: block;
            text-align: center;
          }
        }
        li.li2 {
          padding: 0 80px;
          font-size: 20px;
          color: #747474;
        }
        &:hover {
          color: #fff;
          background: url("../assets/siconbg.jpg") center 0 no-repeat;
          li.li1 {
            color: #fff;
          }
          li.li2 {
            color: #fff;
          }
        }
      }
      ul.ul1 {
        li.li1 span {
          transition: 0s all;
          background: url("../assets/sicon_1.png") center 0 no-repeat;
        }
        &:hover {
          li.li1 span {
            background-position: 0 -120px;
          }
        }
      }
      ul.ul2 {
        li.li1 span {
          transition: 0s all;
          background: url("../assets/sicon_2.png") center 0 no-repeat;
        }
        &:hover {
          li.li1 span {
            background-position: 0 -120px;
          }
        }
      }
      ul.ul3 {
        li.li1 span {
          transition: 0s all;
          background: url("../assets/sicon_3.png") center 0 no-repeat;
        }
        &:hover {
          li.li1 span {
            background-position: 0 -120px;
          }
        }
      }
      ul.ul4 {
        li.li1 span {
          transition: 0s all;
          background: url("../assets/sicon_4.png") center 0 no-repeat;
        }
        &:hover {
          li.li1 span {
            background-position: 0 -120px;
          }
        }
      }
    }
  }
  .school-4 {
    height: 883px;
    padding-top: 60px;
    background: url("../assets/schoolbg_3.jpg") center 0 no-repeat;
    .con {
      max-width: 1050px;
      margin: 0 auto;
      font-size: 24px;
      color: #747474;
      line-height: 1.6;
      text-align: center;
    }
    .school-swiper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 50px 100px 50px;
      position: relative;
      .swiper-slide {
        width: 687px;
        ul {
          li.li1 {
            width: 100%;
            img {
              width: 100%;
            }
          }
          li.li2 {
            display: none;
          }
        }
      }
      .swiper-slide-prev,
      .swiper-slide-next {
        width: 687px;
        overflow: hidden;
        margin-bottom: -100px;
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

@media screen and (max-width: 640px) {
  .school-wrapper {
    .banner {
      height: 340px;
      h2 {
        width: 100%;
        font-size: 20px;
      }
    }
    .school-1 {
      height: auto;
      padding-top: 20px;
      padding-bottom: 20px;
      background: #fff;
      .tit {
        margin-bottom: 20px;
      }
      .con {
        padding: 0 20px;
        font-size: 14px;
        text-indent: 28px;
      }
    }
    .school-2 {
      height: auto;
      padding: 20px 10px 20px 10px;
      .tit {
        margin-bottom: 20px;
      }
      .con {
        ul {
          height: auto;
          padding-bottom: 10px;
          margin: 0 5px;
          li.li1 {
            padding-top: 100px;
            font-size: 20px;
          }
          li.li2 {
            font-size: 12px;
          }
        }
        ul.ul1,
        ul.ul2,
        ul.ul3,
        ul.ul4,
        ul.ul5,
        ul.ul6 {
          background-size: 80px 69px;
        }
      }
    }
    .school-3 {
      height: auto;
      padding: 20px 10px 40px 10px;
      .tit {
        margin-bottom: 20px;
      }
      .con {
        ul {
          height: auto;
          padding-bottom: 10px;
          li.li1 {
            font-size: 14px;
          }
          li.li2 {
            font-size: 12px;
            padding: 0 20px;
          }
        }
        ul.ul1,
        ul.ul2,
        ul.ul3,
        ul.ul4 {
          li.li1 span {
            width: 80px;
            height: 80px;
            background-size: 80px 160px;
          }
          &:hover {
            li.li1 span {
              background-position: 0 -80px;
            }
          }
        }
        ul.ul1,
        ul.ul4 {
          background-color: #fafafa;
        }
      }
    }
    .school-4 {
      height: auto;
      padding: 20px 20px 40px 20px;
      .tit {
        margin-bottom: 20px;
      }
      .con {
        font-size: 18px;
      }
      .school-swiper {
        padding: 20px;
        .swiper-slide {
          width: 300px;
        }
      }
    }
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
}
</style>