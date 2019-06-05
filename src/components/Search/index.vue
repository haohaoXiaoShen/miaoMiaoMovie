<template>
  <div id="Search">
    <Loadding v-if="Loadding"></Loadding>
    <input
      type="text"
      style="width:80%;margin:10px;height:35px;border-radius:10px;font"
      v-model="searchInp"
    >
    <i class="iconfont icon-sousuo" style="cursor: pointer;font-size:25px;" @click="search"></i>

    <div class="content">
      <div v-for="(item,index) in list" :key="index" class="li" @click="MovieInfo(item.id)">
        <img :src="item.img|imgfilter" alt>
        <span class="nm">{{item.nm}}</span>
        <span class="star">{{item.star|addr}}</span>
        <span class="version">{{item.version}}</span>
        <span class="preShow">预售</span>
        <span class="rt">{{item.rt |addr}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Loadding from "@/components/Loadding";
export default {
  name: "Search",
  data() {
    return {
      searchInp: "",
      list: [],
      Loadding: false
    };
  },
  components: {
    Loadding
  },
  filters: {
    addr: function(val) {
      return val.substring(0, 14) + "...";
    },
    nm: function(val) {
      return val.substring(0, 8) + "..";
    }
  },
  methods: {
    search() {
      this.Loadding = true;
      console.log(this.searchInp);
      this.axios(
        "http://api.kele8.cn/agent/http://39.97.33.178/api/searchList?cityId=" +
          this.$store.state.city.id +
          "&kw=" +
          this.searchInp
      ).then(res => {
        if (res.data.data.movies == undefined) {
          this.Loadding = false;
          alert("不存在");
        } else {
          console.log(res);
          this.list = res.data.data.movies.list;
          if (res.data.msg == "ok") {
            this.Loadding = false;
          }
        }
      });
    },
    MovieInfo(id) {
      this.$router.push({ name: "MovieInfo", params: { id: id } });
    }
  }
};
</script>

<style scoped>
input {
  width: 80%;
  cursor: pointer;
}
.content {
  width: 100%;
  height: 600px;
  overflow: hidden;
}
img {
  vertical-align: top;
  width: 30%;
  display: inline-block;
}
.li {
  padding: 15px;
  position: relative;
}
img {
  width: 25%;
  vertical-align: top;
  display: inline-block;
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
  right: 55%;
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
