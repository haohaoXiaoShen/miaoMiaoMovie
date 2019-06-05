<template>
  <div id="BuyInfo">
    <div id="container">
      <div class="nm">
        <span>{{nm}}</span>
        <span class="sc">{{sc}}</span>
      </div>
      <p class="desc">{{desc}}</p>
    </div>
    <van-tabs>
      <van-tab v-for="(item,index) in shows" :title="item.dateShow" :key="index">
        <ul class="info">
          <li v-for="(i,item) in item.plist" :key="item">
            <div class="infoLineOne">
              <span class="tm">{{i.tm}}</span>
              <span class="lang">{{i.lang}}</span>
              <span class="tp">{{i.tp}}</span>
              <span class="nomalPrice">￥{{i.vipPrice | nomalPrice}}</span>
              <span class="vipPriceName">{{i.vipPriceName}}</span>
              <span class="vipPrice">￥{{i.vipPrice}}</span>
              <span class="buyTicket" @click="chooseSite">购票</span>
            </div>
            <div class="infoLineTwo">
              <span class="em">{{i.tm | lt}}</span>
              <span class="th">{{i.th}}</span>
              <span class="extraDesc">{{i.extraDesc}}</span>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "BuyInfo",
  data() {
    return {
      item: {}
    };
  },
  methods: {
    chooseSite() {
      this.$router.push({ name: "chooseSite" });
    }
  },
  filters: {
    nomalPrice: function(value) {
      return parseInt(value * 1.4);
    },
    lt: function(value) {
      return (
        parseInt(value.split(":")[0]) + 2 + ":" + value.split(":")[0] + "散场"
      );
    }
  },
  computed: {
    nm: function() {
      return this.$store.state.cinema.nm;
    },
    desc: function() {
      return this.$store.state.cinema.desc;
    },
    sc: function() {
      return this.$store.state.cinema.sc;
    },
    shows: function() {
      return this.$store.state.cinema.shows;
    }
  }
};
</script>

<style scoped>
li {
  padding-top: 15px;
  padding-bottom: 15px;
}
#container > p {
  text-align: center;
}
.nm {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.desc {
  font-size: 14px;
  padding-top: 5px;
  color: darkcyan;
}
.sc {
  font-size: 16px;
  color: orange;
  padding-left: 15px;
}
.tm {
  font-size: 20px;
  margin-left: 5px;
}
.lang {
  font-size: 15px;
  margin-left: 25px;
}
.tp {
  font-size: 15px;
}
.nomalPrice {
  font-size: 20px;
  color: rgb(241, 186, 47);
  margin-left: 25px;
}
.vipPriceName {
  font-size: 12px;
  background-color: #ff9900;
  color: white;
  padding: 2px;
  margin-left: 5px;
}
.vipPrice {
  font-size: 12px;
  border: 1px solid #ff9900;
  padding: 1px;
  color: #ff9900;
}
.infoLineTwo > span {
  font-size: 15px;
  color: rgb(133, 128, 128);
}
.em {
  margin-left: 5px;
}
.th {
  margin-left: 20px;
}
.extraDesc {
  margin-left: 10px;
}
.buyTicket {
  float: right;
  margin-right: 15px;
  color: rgb(255, 255, 255);
  border: 1px solid red;
  padding: 5px;
  font-size: 13px;
  transform: translateY(10px);
  background-color: #ff9900;
  border-radius: 7px;
}
</style>
