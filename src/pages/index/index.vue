<template>
  <div class="index-box">
    <div class="check-box">
      <p class="head-title">请选择检测种类：</p>
      <ul class="head-box">
        <li class="head-tab" v-for="(val,index) in tabList" :key="index" :class="{'check-this':index==num}" @click="check(index,val)">
          <h3>
            <i class="icon icon-cnki" :class="{'icon-pp66':index == 5}"></i> {{val.name}}</h3>
          <p>{{val.title}}</p>
        </li>
      </ul>
    </div>
    <div v-for="(val,index) in tabList" :key="index" v-if="val.show" class="explain-box">
      <h3>
        系统简介<span class="red">{{val.price}}</span>
      </h3>
      <ul>
        <li v-for="(item,id) in val.explain" :key="id" class="paper-explain">
          {{item}}
        </li>
      </ul>
      <button class="submit" @click="submit()" open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">立即检测</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      motto: "Hello 乐乐",
      userInfo: {},
      num: 0,
      tabList: [
        {
          name: "本科PMLC",
          title: "专科、本科毕业论文定稿",
          price: "285元/篇",
          explain: {
            1: "1、产品特点：独有“学术论文联合比对库”，检测结果和学校一样，数据库同步实时更新，检测报告提供4个详细报告，重复文字全部标出，报告支持验证",
            2: "2、适用范围：硕士、博士论文，在职研究生论文，书稿，调研、研究报告等",
            3: "3、最大单篇检测字符上限为28万字符，不支持多篇合测",
            4: "4、检测时间：30-60分钟"
          },
          show: true
        },
        {
          name: "硕博VIP5.1",
          title: "硕士、博士毕业论文定稿",
          price: "285元/篇",
          explain: {
            1: "1、产品特点：独有“学术论文联合比对库”，检测结果和学校一样，数据库同步实时更新，检测报告提供4个详细报告，重复文字全部标出，报告支持验证",
            2: "2、适用范围：硕士、博士论文，在职研究生论文，书稿，调研、研究报告等",
            3: "3、最大单篇检测字符上限为28万字符，不支持多篇合测",
            4: "4、检测时间：30-60分钟"
          },
          show: false
        },
        {
          name: "期刊AMLC",
          title: "发表论文查重初稿",
          price: "285元/篇",
          explain: {
            1: "1、产品特点：独有“学术论文联合比对库”，检测结果和学校一样，数据库同步实时更新，检测报告提供4个详细报告，重复文字全部标出，报告支持验证",
            2: "2、适用范围：硕士、博士论文，在职研究生论文，书稿，调研、研究报告等",
            3: "3、最大单篇检测字符上限为28万字符，不支持多篇合测",
            4: "4、检测时间：30-60分钟"
          },
          show: false
        },
        {
          name: "大分解",
          title: "发表论文查重初稿",
          price: "285元/篇",
          explain: {
            1: "1、产品特点：独有“学术论文联合比对库”，检测结果和学校一样，数据库同步实时更新，检测报告提供4个详细报告，重复文字全部标出，报告支持验证",
            2: "2、适用范围：硕士、博士论文，在职研究生论文，书稿，调研、研究报告等",
            3: "3、最大单篇检测字符上限为28万字符，不支持多篇合测",
            4: "4、检测时间：30-60分钟"
          },
          show: false
        },
        {
          name: "小分解",
          title: "高校毕业论文初查",
          price: "285元/篇",
          explain: {
            1: "1、产品特点：独有“学术论文联合比对库”，检测结果和学校一样，数据库同步实时更新，检测报告提供4个详细报告，重复文字全部标出，报告支持验证",
            2: "2、适用范围：硕士、博士论文，在职研究生论文，书稿，调研、研究报告等",
            3: "3、最大单篇检测字符上限为28万字符，不支持多篇合测",
            4: "4、检测时间：30-60分钟"
          },
          show: false
        },
        {
          name: "Paper666",
          title: "初稿必备、省钱",
          price: "1元/千字",
          explain: {
            1: "1、产品特点：独有“学术论文联合比对库”，检测结果和学校一样，数据库同步实时更新，检测报告提供4个详细报告，重复文字全部标出，报告支持验证",
            2: "2、适用范围：硕士、博士论文，在职研究生论文，书稿，调研、研究报告等",
            3: "3、最大单篇检测字符上限为28万字符，不支持多篇合测",
            4: "4、检测时间：30-60分钟"
          },
          show: false
        }
      ],
      canIUse: wx.canIUse("button.open-type.getUserInfo")
    };
  },
  created() {
  },
  onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo);
            }
          });
        }
      }
    });
  },
  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo)
  },
  components: {},

  methods: {
    check: function(index, val) {
      console.log(this);
      this.num = index;
      for (let i = 0; i < this.tabList.length; i++) {
        if (i == this.num) {
          this.tabList[i].show = true;
        } else {
          this.tabList[i].show = false;
        }
      }
    },
    submit: function() {
      // wx.navigateTo({
      //   url: `../submit/main?num=${this.num}`
      // });
      wx.login({
      success: function(res) {
        console.log(res);
      }
    });
    }
  }
};
</script>

<style scoped>
.icon {
  width: 40px;
  height: 40px;
  margin-left: 5px;
  vertical-align: middle;
  float: left;
}
.icon-cnki {
  background: url(http://www.91cnki.com/paper666/cnki.png) no-repeat center;
}
.icon-pp66 {
  background: url(http://www.91cnki.com/paper666/666.png) no-repeat center;
}
.red {
  color: #ff5722;
  float: right;
}
.index-box {
  background: #eeeded;
  min-height: 100vh;
}
.check-box {
  background: #fff;
  padding: 0 10px;
}
.explain-box {
  padding: 0 10px 30px;
}
.explain-box h3 {
  line-height: 3;
  font-size: 18px;
}

.head-box::after {
  display: block;
  content: "";
  clear: both;
}

.head-title {
  padding-top: 15px;
}

.head-tab {
  float: left;
  box-sizing: border-box;
  width: 49%;
  border: 1px solid #ccc;
  margin: 10px 0;
  border-radius: 5px;
  overflow: hidden;
}

.head-tab:nth-of-type(odd) {
  margin-right: 2%;
}

.head-tab h3 {
  text-align: right;
  padding: 10px 14px;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  color: #333;
}

.head-tab p {
  background: #eef0f4;
  color: #999;
  text-align: center;
  font-size: 13px;
  line-height: 2;
}

.check-this {
  border-color: #ff5722;
  color: #ff5722;
}

.check-this p {
  color: #ff5722;
}
.check-this .icon-cnki {
  background: url(http://www.91cnki.com/paper666/cnki-select.png) no-repeat
    center;
}
.check-this .icon-pp66 {
  background: url(http://www.91cnki.com/paper666/666-select.png) no-repeat
    center;
}
.check-this h3 {
  color: #ff5722;
}

.paper-explain {
  font-size: 12px;
  color: #333;
  line-height: 1.5;
}
.submit {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  background: #333;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
}
</style>
