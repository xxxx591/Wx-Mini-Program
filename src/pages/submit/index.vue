<template>
  <div class="submit-box">
    <div class="submit">
      <div class="index-section">
        <picker @change="bindDateChangeStart($event)" :value="array[num]" mode="selector" :range="array">
          <div class="pick-box">
            <span class="left-span">专业</span>
            {{ array[num] }}
            <span class="triangle"></span>
          </div>
        </picker>
      </div>

      <div class="submit-title">
        <span>标题</span>
        <input type="text" name="" placeholder="我的论文" @change="getPaperTitle($event)">
      </div>
    </div>
    <div class="txt-box">
      <span>
        内容
      </span>
      <textarea name="" id="" cols="30" rows="10" maxlength="-1" @change="getPaperVal($event)" placeholder="提交内容建议去除封面、目录、附录仅提交正文"></textarea>
    </div>
    <h3 class="word-num">已输入{{index}}字，共计<span class="red">{{price}}</span>元</h3>
    <div style="padding:0 10px;">
      <button class="submit-btn" @click="submit()">提交检测</button>  
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "提交论文",
      num: 0,
      array: [
        "本科PMLC",
        "硕博VIP5.1",
        "期刊AMLC",
        "大分解",
        "小分解",
        "paper66"
      ],
      index: 0,
      price: 0,
      title:'我的论文',
      val:'',
    };
  },
  onLoad: function(option) {
    this.num = option.num;
  },
  methods: {
    bindDateChangeStart: function(e) {
      console.log(e.target.value);
      this.num = e.target.value;
    },
    getPaperTitle: function(e) {
      this.title = e.target.value
    },
    getPaperVal: function(e) {
      let str = e.target.value;
      this.val = e.target.value;
      let result;
      // 去除字符串空格正则
      result = str.replace(/[ ]/g,"");
      // 遍历字符串
      let charLength = 0;
      for (var i = 0; i < result.length; i++) {
        var sonChar = result.charAt(i);
        //如果是汉字，长度大于2，其他任何字符（包括￥等特殊字符，长度均为1）另外：根据需求规则，限制n个字，一个字=2个字符
        encodeURI(sonChar).length > 2 ? (charLength += 1) : (charLength += 0.5);
      }
      // 同步字数
      this.index = parseInt(charLength);
    },
    submit:function(){
      console.log(this.title);
      console.log(this.num);
      console.log(this.val);
    }
    
  }
};
</script>
<style scoped>
.red {
  display: inline-block;
  color: #ff5722;
}
.submit-box {
  background: #eeeded;
  min-height: 100vh;
  padding-top: 20px;
}

.submit {
  padding: 0 10px;
  background: #fff;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
}

.pick-box {
  position: relative;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  color: #333;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}

.pick-box .left-span {
  float: left;
}

.pick-box .triangle {
  display: block;
  width: 0;
  height: 0;
  border-width: 10px 8px 0;
  border-style: solid;
  border-color: #333 transparent transparent;
  position: absolute;
  top: 50%;
  margin-top: -5px;
  right: 0px;
}
.submit-title {
  position: relative;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
.submit-title span {
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 80px;
}
.submit-title input {
  display: inline-block;
  height: 50px;
  margin-left: 50px;
}
.txt-box {
  background: #fff;
  padding: 10px;
  position: relative;
  font-size: 16px;
}
.txt-box span {
  position: absolute;
}
.txt-box textarea {
  margin-left: 50px;
  display: inline-block;
}
.word-num {
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
.submit-btn {
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
