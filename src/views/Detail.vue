<template>
  <div class="detail">
    <div class="banner">
      <h2>新能源资产上链、发行、清结算<br>系统解决方案提供商</h2>
    </div>
    <div class="news">
      <div class="news-nav">
        <span>
          新闻资讯 &gt;
          <i>详情</i>
        </span>
        <span>{{time}}</span>
      </div>
      <div class="news-tit" v-html="tit"></div>
      <div class="news-con" v-html="con"></div>
    </div>
  </div>
</template>

<script>
import _ from "loadsh";

export default {
  data() {
    return {
      tit: "",
      con: "",
      time: ""
    };
  },
  methods: {
    getNews(id) {
      this.$get('wp/v2/posts/'+id).then((res) => {
        this.tit = res.title.rendered || "";
        this.con = res.content.rendered || "";
        this.time = res.date ? this._formatTime(res.date) : ""
      })
    },
    _formatTime(t) {
      return t.split('T')[0];
    }
  },
  mounted() {
    let id = _.toNumber(this.$route.query.id);
    this.getNews(id);
  }
};
</script>

<style lang="less">
.detail {
  min-width: 1200px;
  .banner {
    height: 396px;
    padding-top: 77px;
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
      padding-bottom: 150px;
      p {
        padding-bottom: 20px;
        color: #6c6c6c;
      }
      figure.wp-block-image {
        padding-bottom: 20px;
        text-align: center;
        figcaption {
          font-size: 14px;
          color: rgb(128, 128, 128);
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
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
        p {
          text-indent: 0;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
