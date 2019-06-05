<template>
  <div id="cinemaList">
    <Loadding v-show="Loadding"></Loadding>
    <Goback></Goback>
    <div class="container">
      <span class="nm">{{cinemaData.nm}}</span>
      <i class="iconfont icon-dingwei" @click="goCity" v-show="!Loadding"></i>
      <p class="addr">{{cinemaData.addr}}</p>
    </div>
    <van-swipe :width="120">
      <van-swipe-item v-for="(item,index) in showData.movies" :key="index" @click="Buy(item)">
        <img :src="item.img |imgfilter" alt>
      </van-swipe-item>
    </van-swipe>

    <router-view></router-view>

    <BuyInfo></BuyInfo>
  </div>
</template>

<script>
import Loadding from "@/components/Loadding";
import BuyInfo from "@/components/BuyInfo";
import Goback from "@/components/Goback";
export default {
  name: "cinemaList",
  data() {
    return {
      showData: {},
      cinemaData: {},
      active: 1,
      Loadding: true
    };
  },
  components: {
    Goback,
    BuyInfo,
    Loadding
  },
  mounted() {
    this.axios(
      "http://api.kele8.cn/agent/http://m.maoyan.com/ajax/cinemaDetail?cinemaId=" +
        this.$route.params.id
    ).then(res => {
      console.log(res.data.dealList.activity);
      this.$store.commit("eatInfo",)
      if (res.statusText == "OK") {
        this.Loadding = false;
      }
      this.cinemaData = res.data.cinemaData;
      this.showData = res.data.showData;
    });
  },
  filters: {
    addrCut: function(value) {
      //   return value.substring(0, 18) + "...";
    }
  },
  methods: {
    Buy(item) {
      console.log(item.shows);
      this.$store.commit("cinemaInfo", item);
    },
    goCity() {
      this.$router.push({ name: "City" });
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 70px;
  padding-bottom: 20px;
}
.nm {
  font-weight: bold;
  padding-left: 10px;
  font-size: 18px;
}
.icon-dingwei {
  float: right;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 28px;
  color: rgb(103, 103, 224);
  border-left: 1px solid rgb(212, 177, 177);
}
.addr {
  font-size: 13px;
  padding-left: 10px;
  padding-top: 6px;
  color: rgb(151, 148, 148);
}
img {
  width: 120%;
  height: 180px;
  border: 8px solid white;
}
</style>
