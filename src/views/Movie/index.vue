<template>
  <div id="Movie">
    <Localing v-show="Localing"></Localing>
    <Header></Header>
    <div class="content">
      <ul>
        <router-link tag="li" to="/Movie/city">
          <i class="iconfont icon-dingwei"></i>
          <span>{{cityName}}</span>
        </router-link>
        <router-link tag="li" to="/Movie/nowPlaying">正在热映</router-link>
        <router-link tag="li" to="/Movie/commingsoon">即将上映</router-link>
        <router-link tag="li" to="/Movie/search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </ul>
    </div>
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Localing from "@/components/Localing";
import Header from "@/components/Header";
import Footer from "@/components/Tabbar";
export default {
  name: "Movie",
  data() {
    return {
      Localing: false
    };
  },
  components: {
    Header,
    Footer,
    Localing
  },
  computed: {
    cityName: function() {
      return this.$store.state.city.nm;
    }
  }
  // created() {
  //   this.axios("/city/api/getLocation").then(res => {
  //     console.log(res.data);
  //     this.$store.state.city.nm = res.data.data.nm;
  //     this.$store.state.city.id = res.data.data.id;
  //     if (res.data.msg == "ok") {
  //       setInterval(() => {
  //         this.Localing = false;
  //       }, 1000);
  //     }
  //   });
  // }
};
</script>

<style scoped>
ul {
  display: flex;
  padding-top: 50px;
}
li {
  flex: 4;
  text-align: center;
  height: 50px;
  line-height: 50px;
}

.router-link-active {
  border-bottom: 2px solid rgba(211, 46, 46, 0.555);
}
.iconfont {
  color: red;
  font-size: 20px;
}
.icon-sousuo {
  font-size: 25px;
}
</style>
