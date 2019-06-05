<template>
  <div id="chooseSite">
    <p class="reback" @click="goback">返回</p>
    <div class="siteArea">
      <p class="screen">屏幕</p>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "chooseSite",
  methods: {
    goback() {
      this.$router.push({ name: "Cinema" });
    }
  }
};
</script>

<style scoped>
.reback {
  background-color: rgb(255, 0, 0);
  color: white;
  padding: 10px;
}
.siteArea {
  width: 85%;
  margin: 50px auto;
}
.screen {
  text-align: center;
  font-size: 17px;
  background-color: antiquewhite;
}
ul {
  padding-top: 20px;
  height: 100%;
}
.site {
  padding: 8px;
  box-sizing: border-box;
}
.row {
  background-color: rgb(255, 0, 0);
  padding-top: 15px;
}
</style>

