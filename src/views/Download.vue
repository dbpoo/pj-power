<template>
  <div class="download-wrapper">
    <div class="banner">
      <h2>
        新能源资产上链、发行、清结算
        <br>系统解决方案提供商
      </h2>
      <div class="download-btn">
        <a href="javascript:;" @click="toast"></a>
      </div>
    </div>
    <div class="download-1">
      <div class="tit">
        <span>
          <i>平台介绍</i>
        </span>
      </div>
      <div class="con">
        <p>“新能源资产上链发行清结算平台”是由国研智库、清华X-lab、新能区块链共同发起，联合新能源头部企业、新能源行业协会、司法鉴定机构、金融保险机构、区块链技术公司、交易所等多方共建“新能源资产上链发行清结算平台”，旨在响应国家数字经济战略，在数字治理、数字产业、数字金融三个方向共同推动新能源产业数字化、规范化、健康化发展。</p>
        <p>“新能源资产上链发行清结算平台”是将新能源产业与区块链技术相结合，以新能源产业的区块链技术应用为驱动，结合数字经济国家战略大趋势，实现科技、产业、金融协同发展，助力新能源领域产业数字化、数字产业化。</p>
      </div>
    </div>
    <div class="download-2">
      <div class="tit">
        <span>
          <i>多终端访问</i>
        </span>
      </div>
      <div class="type">
        <div class="client">
          <a href="javascript:;" class="icon-ios" @click="gohome">
            <i>
              <img src="../assets/icon_iphone.png" alt>
            </i>
            iPhone访问
            <span></span>
          </a>
          <a href="javascript:;" class="icon-android" @click="gohome">
            <i>
              <img src="../assets/icon_android.png" alt>
            </i>
            Android访问
            <span></span>
          </a>
          <a href="javascript:;" class="icon-window" @click="toast">
            <i>
              <img src="../assets/icon_window.png" alt class="iconup">
              <img src="../assets/icon_download.png" alt class="icondown">
            </i>Windows访问
          </a>
          <a href="javascript:;" class="icon-macos" @click="toast">
            <i>
              <img src="../assets/icon_iphone.png" alt class="iconup">
              <img src="../assets/icon_download.png" alt class="icondown">
            </i>Mac OS访问
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth
    };
  },
  methods: {
    gohome() {
      if (this.screenWidth < 768) {
        this.$router.push({ name: "home" });
      }
    },
    toast() {
      alert("暂未开放，敬请期待！");
    }
  }
};
</script>

<style lang="less">
.download-wrapper {
  .banner {
    height: 473px;
    padding-top: 77px;
    background: url("../assets/cbanner_download.jpg") center 0 no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    h2 {
      width: 920px;
      font-size: 60px;
      text-align: center;
      color: #fff;
    }
    .download-btn {
      width: 100%;
      position: absolute;
      bottom: 30px;
      left: 0;
      text-align: center;
      a {
        width: 291px;
        height: 66px;
        display: inline-block;
        background: url("../assets/download_btn.png") center 0 no-repeat;
        background-size: contain;
      }
    }
  }
  .download-1 {
    height: 575px;
    background: url("../assets/downloadbg_1.jpg") center 0 no-repeat;
    padding-top: 100px;
    .con {
      max-width: 1200px;
      margin: 0 auto;
      p {
        text-indent: 3rem;
        line-height: 1.5;
        color: #747474;
        font-size: 24px;
        margin-bottom: 15px;
      }
    }
  }
  .download-2 {
    height: 786px;
    background: url("../assets/downloadbg_2.jpg") center 0 no-repeat;
    padding-top: 60px;
    .tit {
      color: #fff;
    }
    .type {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      .client {
        display: flex;
        justify-content: space-between;
        a {
          display: inline-block;
          font-size: 24px;
          color: #fff;
          line-height: 72px;
          position: relative;
          i {
            width: 72px;
            height: 72px;
            display: inline-block;
            overflow: hidden;
            background-color: #fff;
            border-radius: 50%;
            position: relative;
            vertical-align: top;
            margin-right: 10px;
          }
        }
        a.icon-ios {
          span {
            width: 249px;
            height: 211px;
            position: absolute;
            top: -50%;
            left: 0;
            margin: -20px 0 0 -10px;
            background: url("../assets/download_qr.jpg") center 0 no-repeat;
            display: none;
            z-index: 99;
          }
          &:hover {
            span {
              display: block;
            }
          }
        }
        a.icon-android {
          z-index: 1;
          span {
            width: 249px;
            height: 211px;
            position: absolute;
            top: -50%;
            left: 0;
            margin: -20px 0 0 -10px;
            background: url("../assets/download_qr.jpg") center 0 no-repeat;
            display: none;
            z-index: 99;
          }
          &:hover {
            span {
              display: block;
            }
          }
        }
        a.icon-window,
        a.icon-macos {
          .iconup {
            position: absolute;
            top: 0;
            left: 0;
          }
          .icondown {
            position: absolute;
            top: 72px;
            left: 0;
          }
          &:hover {
            .iconup {
              top: -72px;
            }
            .icondown {
              top: 0px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .download-wrapper .banner {
    height: 340px;
    padding-bottom: 50px;
  }
  .download-wrapper .banner h2 {
    width: 100%;
    font-size: 20px;
  }
  .download-wrapper .banner .download-btn a {
    width: 200px;
    height: 45px;
  }
  .download-wrapper .download-1 {
    height: auto;
    padding-top: 30px;
    .tit {
      margin-bottom: 20px;
    }
    .con {
      padding: 0 30px 30px 30px;
      p {
        font-size: 14px;
        text-indent: 28px;
      }
    }
  }
  .download-wrapper .download-2 {
    height: 420px;
    background: url("../assets/downloadbg_m.jpg") center 0 no-repeat;
    background-size: cover;
    padding-top: 30px;
    .tit {
      margin-bottom: 10px;
    }
    .type {
      .client {
        display: flex;
        flex-wrap: wrap;
        padding: 30px 30px 0 30px;
        a {
          width: 50%;
          font-size: 16px;
          line-height: 30px;
          i {
            width: 30px;
            height: 30px;
            img {
              width: 100%;
            }
          }
        }
        a.icon-ios {
          &:hover {
            span {
              display: none;
            }
          }
        }
        a.icon-android {
          &:hover {
            span {
              display: none;
            }
          }
        }
        a.icon-window,
        a.icon-macos {
          display: none;
        }
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .download-wrapper .download-2 {
    .type {
      .client {
        a {
          font-size: 12px;
        }
      }
    }
  }
}
</style>