<template>
  <div class="list-wrapper">
    <div class="banner">
      <h2>新闻动态</h2>
    </div>
    <div class="list">
      <div class="tit">
        <span><i>新闻资讯</i></span>
      </div>
      <div class="item" v-for="(item, index) in newList" :key="index">
        <div class="item-img">
          <img
            :src="
              item.better_featured_image
                ? item.better_featured_image.source_url
                : 'http://www.xinnengboan.com/upload/default.jpg'
            "
            alt=""
          />
        </div>
        <ul>
          <li class="li1">
            <h2>
              <a @click="toDetail(item.id)" v-html="item.title.rendered"></a>
            </h2>
            <p v-html="item.excerpt.rendered"></p>
          </li>
          <li class="li2">{{ item.date }}</li>
        </ul>
        <span class="arrow"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      newList: []
    };
  },
  methods: {
    getNewsList() {
      this.$get("wp/v2/posts").then(res => {
        this.newList = res;
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
    this.getNewsList();
  }
};
</script>

<style lang="less" scoped>
.list-wrapper {
  min-width: 1200px;
  .banner {
    height: 473px;
    padding-top: 77px;
    background: url("../assets/cbanner_list.jpg") center 0 no-repeat;
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
  .list {
    width: 1200px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 200px;
    background: url("../assets/listbg.jpg") center 0 repeat-y;
    .item {
      background-color: #fff;
      box-shadow: 5px 5px 8px 1px rgba(102, 102, 102, 0.5);
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      position: relative;
      .item-img {
        width: 270px;
        height: 166px;
        overflow: hidden;
        margin-right: 75px;
        flex: 0 0 auto;
        img {
          width: 270px;
          height: 166px;
        }
      }
      ul {
        padding: 15px 0;
        padding-right: 180px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        li.li1 {
          h2 {
            font-size: 24px;
              margin-bottom: 10px;
            a {
              color: #585858;
            }
          }
          p {
            font-size: 18px;
            color: #878787;
          }
        }
        li.li2 {
          font-size: 16px;
          color: #878787;
        }
      }
      span.arrow {
        width: 25px;
        height: 26px;
        position: absolute;
        right: 42px;
        bottom: 15px;
        background: url("../assets/arrow.png") 0 0 no-repeat;
      }
      &:hover {
        ul {
          li.li1 {
            h2 {
              a {
                color: #29acf1;
              }
            }
          }
        }
        span.arrow {
          background: url("../assets/arrowhover.png") 0 0 no-repeat;
        }
      }
    }
  }
}
</style>