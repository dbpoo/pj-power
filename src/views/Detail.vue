<template>
  <div class="detail">
    <div class="banner">
      <h2>
        新能源资产上链、发行、清结算系统解决方案提供商
      </h2>
    </div>
    <div class="news">
      <div class="news-nav">
        <span>新闻资讯 &lt; <i>详情</i></span>
        <span>2019-04-22</span>
      </div>
      <div class="news-tit">光伏龙头企业竞相迈入组件4.0快车道</div>
      <div class="news-con">
        <p>随着平价上网的脚步越来越近，光伏发展到现阶段，可以说已经进入了光伏组件4.0阶段，光伏行业的需求在于能够真正降低LCOE的高效产品。</p>
        <p>据悉，SunPower公司宣布，2019年开始推出户用光伏市场上最高功率的光伏组件。该组件功率达400-415W，在同样面积下，与传统光伏组件相比，这款组件的发电量提升了60%，未来主要面向美国、澳大利亚和欧洲市场。</p>
        <p>另一家主打420W大功率薄膜太阳能组件的美国光伏企业First Solar，也加快了扩产进度，新建的1.2GW产能的薄膜太阳能组件工厂将于今年四季度达产。400W组件的出现，一定程度上加速了高效组件市场发展，让喜好大功率组件的美国光伏市场竞争愈加激烈。</p>
        <p><b>4.0时代必备技术</b></p>
        <p>在目前国内光伏企业普遍向海外拓展光伏业务状况下，协鑫集成产品工程师周英杰认为，针对美国市场的组件功率至少需要到达390W以上；亚洲地区如越南等土地受限的市场，需求功率基本在390W及以上，欧洲市场光伏组件需求功率也至少达到380W，才气进一步确保市场竞争力和公司盈利水平。</p>
        <p>回看国内光伏市场，2018年SNEC期间，晶科推出了功率高达400W的72片半片组件，率先开启了光伏组件“4.0时代”。同时，东方日升也推出了以“PERC+半片”为核心的420W大功率光伏组件。据集邦咨询旗下新能源研究中心集邦新能源网EnergyTrend 先进技术报告数据显示，2018年半片产能只有不到20GW，2019年 下降5%-7%。</p>
        <p>经过硅片、电池片环节后，再到光伏组件技术叠加后，以双面、半片、叠瓦、MBB等多种技术应用下，光伏组件4.0时代已呈现百家争鸣的多样性发展。</p>
        <p>2019年初，晶科能源旗下400W组件开始实现大规模商业化量产，宣告着国内光伏企业正式进入以400W输出功率为起点的光伏4.0时代。而随着光伏超低价格时代的推进，从国内外龙头企业高效产品的研究和发布来看，400W+光伏组件规模化应用正强势到来。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.detail {
  min-width: 1200px;
  .banner {
    height: 396px;
    background: url("../assets/cbanner.jpg") center 0 no-repeat;
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
  .news {
    width: 1200px;
    padding-top: 68px;
    margin: 0 auto;
    .news-nav {
      height: 60px;
      line-height: 60px;
      margin-bottom: 80px;
      font-weight: bold;
      font-size: 20px;
      font-weight: bold;
      color: #6c6c6c;
      border-bottom: 2px solid #29acf1;
      display: flex;
      justify-content: space-between;
      i {
        font-style: normal;
        color: #29acf1;
      }
    }
    .news-tit {
      font-size: 36px;
      text-align: center;
      padding: 0 100px;
      margin-bottom: 55px;
      color: #484848;
    }
    .news-con {
      font-size: 20px;
      p {
        text-indent: 2em;
        padding-bottom: 20px;
        color: #6c6c6c;
      }
    }
  }
}
@media screen and (max-width: 768px ) {
  .detail {
    min-width: 100%;
     .banner {
      height: 300px;
      background-size: cover;
      h2 {
        font-size: 30px;
      }
    }
    .news {
      width: 100%;
      padding-top: 0;
      .news-nav {
        padding: 0 15px;
        margin-bottom: 15px;
      }
      .news-tit {
        font-size: 28px;
        padding: 0 15px;
        margin-bottom: 30px;
      }
      .news-con {
        padding: 0 15px;
      }
    }
  }
}
</style>
