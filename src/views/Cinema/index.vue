<template>
  <div id="Cinema">
    <Loadding v-if="loadding"></Loadding>
    <Header title="喵喵影院"></Header>
    <ul>
      <li v-for="(item,index) in cinemas" :key="index" @click="cinemaInfo(item.id)">
        <div>
          <span class="nm">{{item.nm | nm}}</span>
          <span class="sellPrice">{{item.sellPrice}}</span>
          <span style="font-size:10px;color:red">元起</span>
        </div>
        <span class="addr">{{item.addr | addr}}</span>
        <span class="distance">{{item.distance}}</span>
        <div class="tags">
          <span class="allowRefund" v-show="item.tag.allowRefund">退</span>
          <span class="endorse" v-if="item.tag.endorse">改签</span>
          <span class="snack" v-show="item.tag.snack">小吃</span>
          <span class="vipTag">{{item.tag.vipTag}}</span>
        </div>
        <div class="cardPromotionTag">
          <span>{{item.promotion.cardPromotionTag}}</span>
        </div>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script>
import Loadding from "@/components/Loadding";
import Header from "@/components/Header";
import Footer from "@/components/Tabbar";
export default {
  name: "Cinema",
  components: {
    Header,
    Footer,
    Loadding
  },
  data() {
    return {
      cinemas: [],
      loadding: true
    };
  },
  mounted() {
    this.axios
      .get(
        "http://api.kele8.cn/agent/http://m.maoyan.com/ajax/cinemaList?day=2019-06-04&offset=0&limit=25&districtId=-1" +
          "&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1" +
          "&item=&updateShowDay=true&reqId=1559532718894&cityId=" +
          this.$store.state.city.id
      )
      .then(res => {
        if (res.status == 200) {
          this.loadding = false;
        }
        console.log(res.data.cinemas);
        this.cinemas = res.data.cinemas;
      });
  },
  filters: {
    addr: function(val) {
      return val.substring(0, 14) + "...";
    },
    nm: function(val) {
      return val.substring(0, 8) + "..";
    }
  },
  methods:{
    cinemaInfo(id){
      this.$router.push({name:"cinemaInfo",params:{id:id}})
    }
  }
};
</script>

<style scoped>
ul {
  padding-bottom: 80px;
  padding-top: 60px;
}
li {
  padding: 15px;
  border-bottom: 1px solid rgba(0, 139, 139, 0.103);
  position: relative;
  padding-top: 20px;
}
.nm {
  font-size: 18px;
  text-shadow: 5px 1px 5px rgba(167, 235, 41, 0.424);
}
.addr {
  font-size: 14px;
  color: rgba(47, 56, 65, 0.651);
  padding-top: 5px;
}
.distance {
  float: right;
  font-size: 14px;
  color: rgba(24, 150, 122, 0.651);
}
.tags > span {
  font-size: 13px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  margin-right: 5px;
  text-shadow: 1px 1px 35px darkcyan;
}
.allowRefund {
  border: 1px solid rgba(38, 38, 170, 0.527);
}
.snack {
  color: #b8ce3f;
  border: 1px solid #d0f01f;
}
.endorse {
  border: 1px solid rgb(26, 26, 201);
  color: darkblue;
}
.vipTag {
  color: #b8ce3f;
  border: 1px solid #d0f01f;
}
.sellPrice {
  margin-left: 15px;
  color: red;
  font-size: 17px;
}
.cardPromotionTag span {
  font-size: 14px;
  color: rgb(223, 72, 72);
}
</style>
