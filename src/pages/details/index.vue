<template>
  <div class="details-box">
    <div class="details">
      <div class="details-01">
        <h3>{{details.title}}</h3>
        <p>重复比率：<span>{{details.rata*100}}%</span></p>
      </div>
      <div class="details-02">
        <ul>
          <li>重复字数：<span>{{details.wordNum}}字</span></li>
          <li>总字数：<span>{{details.wordNum}}字</span></li>
          <li>提交时间：<span>{{details.time}}</span></li>
          <li>订单编号：<span>{{details.uid}}</span></li>
        </ul>
      </div>
    </div>
    <div class="details-btn">
      <button>机器降重</button>
      <button class="save-email">发送到邮箱</button>
      <button>查看报告</button>
      <button>删除报告</button>
    </div>
  </div>
</template>

<script>
function request(url, that) {
  wx.request({
    url: url,
    dataType: "json",
    success: function(res) {
      console.log(res.data.data);
      that.details = res.data.data;
    }
  });
}
export default {
  data() {
    return {
      msg: "报告详情页面",
      details: {}
    };
  },
  onLoad(option) {
    console.log(option);
  },
  created() {
    request(
      "https://www.easy-mock.com/mock/5a2f7dc86ce8af6869ec645d/check/paper66details",
      this
    );
  },
  onPullDownRefresh: function() {
    request(
      "https://www.easy-mock.com/mock/5a2f7dc86ce8af6869ec645d/check/paper66details",
      this
    );
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 2000);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.details-box {
  background: #eeeded;
  min-height: 100vh;
  .details {
    padding: 15px 10px;
    background: #fff;
    .details-01 {
      h3 {
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        color: #000;
      }
      p {
        font-size: 14px;
        color: #333;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        border-bottom: 1px solid #c5c5c5;
        span {
          color: #ff5722;
        }
      }
    }
    .details-02 {
      ul {
        li {
          font-size: 14px;
          line-height: 2;
          color: #666;
        }
      }
    }
  }
  .details-btn {
    margin-top: 40px;
    padding: 0 10px;
    button {
      display: inline-block;
      width: 49%;
      font-size: 14px;
      padding: 5px 0;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 10px;
      border: 1px solid #393d49;
      &:nth-of-type(odd) {
        margin-right: 2%;
      }
    }
    .save-email {
      background: #393d49;
      color: #fff;
      border-color: #fff;
    }
  }
}
</style>

