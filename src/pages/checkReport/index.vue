<template>
  <div class="check-report">
    <div class="report-list">
      <ul>
        <li :data-id='val.uid' @click="details(val.uid)" v-for="(val,index) in checkList" :key="index">
          <h3>{{val.title}}
            <span>查看详情</span>
          </h3>
          <p>
            <span>{{val.static}}</span>
            <span>{{val.time}}</span>
          </p>
          <h4>
            重复率：<span>{{val.rata*100}}%</span>
          </h4>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
function request(url, that) {
  wx.request({
    url: url,
    dataType: "json",
    success: function(res) {
      console.log(res);
      that.checkList = res.data.data.checkList;
    }
  });
}
export default {
  data() {
    return {
      msg: "查看报告",
      num: 0,
      index: 0,
      price: 0,
      title: "我的论文",
      val: "",
      checkList: "1"
    };
  },
  created() {
    request(
      "https://www.easy-mock.com/mock/5a2f7dc86ce8af6869ec645d/check/paper666tablist",
      this
    );
  },
  methods: {
    details: function(e) {
      wx.navigateTo({
        url: `../details/main?uid=${e}`
      });
    }
  },
  onPullDownRefresh() {
    request(
      "https://www.easy-mock.com/mock/5a2f7dc86ce8af6869ec645d/check/paper666tablist",
      this
    );
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 2000);
  }
};
</script>
<style lang="scss" scoped>
.red {
  display: inline-block;
  color: #ff5722;
}
.check-report {
  background: #eeeded;
  min-height: 100vh;
  .report-list {
    padding: 15px 0;
    ul {
      li {
        box-sizing: border-box;
        border: 1px solid #c5c5c5;
        background: #fff;
        margin: 0 10px;
        padding-left: 10px;
        margin-bottom: 15px;
        border-radius: 5px;
        color: #333;
        h3 {
          font-size: 16px;
          height: 35px;
          line-height: 35px;
          span {
            float: right;
            font-size: 12px;
            color: #666;
            margin-right: 20px;
          }
        }
        p {
          font-size: 12px;
          color: #666;
          height: 30px;
          line-height: 30px;
          box-sizing: border-box;
          border-bottom: 1px solid #c5c5c5;
          span {
            &:first-of-type {
              display: inline-block;
              margin-right: 10px;
            }
          }
        }
        h4 {
          font-size: 16px;
          height: 35px;
          line-height: 35px;
          span {
            color: #ff5722;
          }
        }
      }
    }
  }
}
</style>

