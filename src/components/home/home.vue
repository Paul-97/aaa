<template>
  <div id="home">
    <mt-swipe class="weew" :auto="3000">
      <mt-swipe-item>
        <img src="../../assets/swipe1.jpeg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/swipe2.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/swipe3.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div>
        <ul class="myUl">
          <li>
            <div class="left"><img src="../../assets/car.png" alt=""></div>
            <div class="right">
              <div class="title">我的标题是......</div>
              <p class="describe">我的描述是我的描述是我的描述是我的描述是我的描述是</p>
            </div>
          </li>
          <li>
            <div class="left"><img src="../../assets/car.png" alt=""></div>
            <div class="right">
              <div class="title">我的标题是......</div>
              <p class="describe">我的描述是我的描述是我的描述是我的描述是我的描述是</p>
            </div>
          </li>
          <li>
            <div class="left"><img src="../../assets/car.png" alt=""></div>
            <div class="right">
              <div class="title">我的标题是......</div>
              <p class="describe">我的描述是我的描述是我的描述是我的描述是我的描述是</p>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      value: "",
      selected: ""
    };
  },
  methods: {}
};
</script>
<style scoped>
.mint-navbar.is-fixed {
  top: 92px;
}
.weew{
  /* width: 100%; */
  height: 100px;
  /* background-color:red; */
  padding:0 10px;
  margin-top:10px;
}
.weew img{
  width: 100%;
  height: 100%;
}
.myUl{
  margin:0 10px;
}
.myUl li{
  width: 100%;
  height: 100px;
  /* background-color: red; */
  margin:10px auto;
}
.left{
  float: left;
  width: 100px;
  height: 100px;
  background-color: #ccc;
  

}
.left img{
  
  width: 50%;
  height: 50%;
  margin:25px 25px;
}
.right{
  float: left;
  margin-left: 15px;
  width: 60%;
}
.title{
  font-size: 20px;
  color:#333;
}
.describe{
  font-size: 18px;
  color:#333;
  margin-top: 5px;
  width: 100%;
}
</style>