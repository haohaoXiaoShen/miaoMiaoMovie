<template>
  <footer id="footer">
    <ul>
      <router-link to="/Movie" tag="li">
        <i class="iconfont icon-dianying"></i>
        <p>电影</p>
      </router-link>
      <router-link to="/Cinema" tag="li">
        <i class="iconfont icon-yingyuan"></i>
        <p>影院</p>
      </router-link>
      <router-link to="/Mine" tag="li">
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 70px;
  background: white;
  border-top: 2px #ebe8e3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
}
ul {
  display: flex;
  height: 100%;
}
li {
  flex: 3;
  text-align: center;
  padding: 5px;
}
.iconfont {
  font-size: 30px;
}

.router-link-active{
  color: rgb(223, 29, 29);
  background-color: rgba(222, 207, 236, 0.274);
}
</style>
