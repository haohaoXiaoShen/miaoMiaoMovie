<template>
  <div id="NowPlaying">
    <Loadding v-show="ready"></Loadding>
    <ul>
      <li v-for="(item,index) in playList" :key="index" @click="goInfo(item.id,item.nm)">
        <img :src="item.img|imgfilter" alt>
        <span class="nm">{{item.nm}}</span>
        <span class="star">{{item.star|star}}</span>
        <span class="version">{{item.version | version}}</span>
        <span class="preShow">预售</span>
        <span class="rt">{{item.rt | rt}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Loadding from "@/components/Loadding";

export default {
  name: "NowPlaying",
  data() {
    return {
      playList: [],
      ready: true
    };
  },
  components: {
    Loadding
  },
  mounted() {
    console.log(this.$store.state.city);
    this.axios(
      "http://api.kele8.cn/agent/http://39.97.33.178/api/movieOnInfoList?cityId=" +
        this.$store.state.city.id
    ).then(res => {
      console.log(res.data.data.movieList);
      this.playList = res.data.data.movieList;
      if (res.request.statusText == "OK") {
        this.ready = false;
      }
    });
  },
  methods: {
    goInfo(id, nm) {
      // console.log(id)
      this.$router.push({ name: "MovieInfo", params: { id: id, nm: nm } });
    }
  },
  directives: {
    font: function(el, binding) {
      el.style.color = binding.value;
    }
  },
  filters: {
    font: function(val) {
      return "主演:" + val.substring(0, 2) + "...";
    }
  },
  filters: {
    star: function(val) {
      return "导演:" + val.substring(0, 15) + "...";
    },
    version: function(val) {
      return val.substring(1).toUpperCase();
    },
    rt: function(val) {
      return "上映时间:" + val;
    }
  }
};
</script>

<style scoped>
ul {
  box-sizing: border-box;
  padding-bottom: 80px;
}
li {
  padding: 10px;
  position: relative;
  border-bottom: 1px solid rgba(202, 198, 198, 0.623);
}
img {
  width: 25%;
  vertical-align: top;
  display: inline;
}
.nm {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.star {
  font-size: 14px;
  position: absolute;
  bottom: 10%;
  left: 29%;
}
.version {
  display: inline-block;
  background-color: rgb(130, 10, 190);
  color: white;
  font-size: 13px;
  border-radius: 15px;
  width: 60px;
  text-align: center;
  position: absolute;
  right: 52%; 
  top: 30%;
}
.preShow {
  position: absolute;
  right: 5%;
  top: 35%;
  background-color: rgb(185, 243, 24);
  padding: 5px;
  border-radius: 10px;
  font-size: 17px;
}
.rt {
  position: absolute;
  font-size: 15px;
  color: rgb(119, 67, 4);
  left: 29%;
  bottom: 35%;
}
</style>
