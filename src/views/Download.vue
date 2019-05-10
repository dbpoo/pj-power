<template>
  <div class="download-wrapper">
    <div class="banner">
      <h2>
        新能源资产上链、发行、清结算
        <br />系统解决方案提供商
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
        <p>
          “新能源资产上链发行清结算平台”是由国研智库、清华X-lab、新能区块链共同发起，联合新能源头部企业、新能源行业协会、司法鉴定机构、金融保险机构、区块链技术公司、交易所等多方共建“新能源资产上链发行清结算平台”，旨在响应国家数字经济战略，在数字治理、数字产业、数字金融三个方向共同推动新能源产业数字化、规范化、健康化发展。
        </p>
        <p>
          “新能源资产上链发行清结算平台”是将新能源产业与区块链技术相结合，以新能源产业的区块链技术应用为驱动，结合数字经济国家战略大趋势，实现科技、产业、金融协同发展，助力新能源领域产业数字化、数字产业化。
        </p>
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
          <a href="javascript:;" class="icon-ios">
            iPhone访问
            <span></span>
          </a>
          <a href="javascript:;" class="icon-android">
            Android访问
            <span></span>
          </a>
          <a href="javascript:;" class="icon-window" @click="toast"
            >Windows访问</a
          >
          <a href="javascript:;" class="icon-macos" @click="toast"
            >Mac OS访问</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
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
        height: 86px;
        line-height: 86px;
        display: flex;
        justify-content: space-between;
        a {
          display: inline-block;
          padding-left: 80px;
          font-size: 24px;
          color: #fff;
          position: relative;
        }
        a.icon-ios {
          background: url("../assets/icon_iphone.png") 0 center no-repeat;
          span {
            width: 249px;
            height: 211px;
            position: absolute;
            top: -50%;
            left: 0;
            margin: -20px 0 0 -10px;
            background: url("../assets/download_qr.jpg") center 0 no-repeat;
            display: none;
          }
          &:hover {
            span {
              display: block;
            }
          }
        }
        a.icon-android {
          background: url("../assets/icon_android.png") 0 center no-repeat;
          span {
            width: 249px;
            height: 211px;
            position: absolute;
            top: -50%;
            left: 0;
            margin: -20px 0 0 -10px;
            background: url("../assets/download_qr.jpg") center 0 no-repeat;
            display: none;
          }
          &:hover {
            span {
              display: block;
            }
          }
        }
        a.icon-window {
          background: url("../assets/icon_window.png") 0 center no-repeat;
        }
        a.icon-macos {
          background: url("../assets/icon_iphone.png") 0 center no-repeat;
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
    height: 550px;
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
        padding: 0 20px;
        a {
          width: 50%;
          padding-left: 50px;
          font-size: 16px;
        }
        a.icon-ios {
          background-size: 40px 40px;
        }
        a.icon-android {
          background-size: 40px 40px;
        }
        a.icon-window {
          background-size: 40px 40px;
        }
        a.icon-macos {
          background-size: 40px 40px;
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