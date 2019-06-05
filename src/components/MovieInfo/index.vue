<template>
  <div id="MovieInfo">
    <Goback></Goback>
    <Loadding v-if="Loadding"></Loadding>
    <div id="container">
      <img :src="img|imgfilter" class="cover">
    </div>
    <p class="nm">{{nm}}</p>
    <span class="rt">{{rt}}{{cat}}({{oriLang}})</span>
    <span class="dir">{{dir}}</span>
    <span class="ver">{{ver}}</span>
    <span class="pubDesc">{{pubDesc}}</span>

    <div class="dra">
      <p style="padding-bottom:10px;">简介:</p>
      {{dra}}
    </div>

    <div class="swiper">
      <p style="color:darkgray">剧照:</p>
      <van-swipe :autoplay="3000" :width="400">
        <van-swipe-item v-for="(item,index) in photos" :key="index">
          <img :src="item|imgfilter" alt>
        </van-swipe-item>
      </van-swipe>
      <p style="color:darkgray">预告片</p>
      <p class="videoName">{{videoName}}</p>
      <video :src="vd" controls="controls" width="100%" :poster="videoImg"></video>
    </div>
  </div>
</template>

<script>
import Loadding from "@/components/Loadding";
import Goback from "@/components/Goback";
export default {
  name: "MovieInfo",
  data() {
    return {
      Loadding: true,
      nm: "",
      id: "",
      img: "",
      rt: "",
      cat: "",
      oriLang: "",
      dir: "",
      ver: "",
      dra: "",
      photos: [],
      videoName: "",
      vd: "",
      videoImg: "",
      pubDesc: ""
    };
  },
  components: {
    Loadding,
    Goback
  },
  created() {
    this.nm = this.$route.params.nm;
    this.id = this.$route.params.id;
    this.axios("http://api.kele8.cn/agent/http://39.97.33.178/api/detailmovie?movieId=" + this.$route.params.id).then(
      res => {
        console.log(res.data.data.detailMovie);
        this.img = res.data.data.detailMovie.img;
        this.rt = res.data.data.detailMovie.rt;
        this.cat = res.data.data.detailMovie.cat;
        this.oriLang = res.data.data.detailMovie.oriLang;
        this.dir = res.data.data.detailMovie.dir;
        this.ver = res.data.data.detailMovie.ver;
        this.dra = res.data.data.detailMovie.dra;
        this.photos = res.data.data.detailMovie.photos;
        this.videoName = res.data.data.detailMovie.videoName;
        this.vd = res.data.data.detailMovie.vd;
        this.videoImg = res.data.data.detailMovie.videoImg;
        this.pubDesc = res.data.data.detailMovie.pubDesc;
        if (res.data.msg == "ok") {
          this.Loadding = false;
        }
      }
    );
  }
};
</script>

<style scoped>
#MovieInfo {
  position: relative;
}
#container {
  width: 100%;
  padding-top: 100px;
  background-color: rgba(173, 7, 7);
  padding-bottom: 50px;
  box-shadow: 25px 8px 30px rgba(59, 59, 47, 0.89);
}
.cover {
  display: block;
  width: 60%;
  height: 100%;
  margin: 0px auto;
  box-shadow: 10px 10px 5px rgba(15, 15, 15, 0.623);
  filter: saturate(200%);
}
.nm {
  display: inline-block;
  font-weight: bold;
  padding-top: 15px;
  padding-left: 15px;
  font-size: 25px;
  font-family: "宋体";
}
span {
  left: 4%;
  position: absolute;
  font-size: 15px;
  color: darkgray;
}
.rt {
  bottom: -3%;
}
.dir {
  bottom: -5%;
}
.ver {
  bottom: -7%;
}
.pubDesc {
  bottom: -9%;
}
.dra {
  padding: 15px;
  font-size: 18px;
  font-family: "楷体";
}
img {
  width: 95%;
  height: 220px;
  box-shadow: 5px 10px 15px rgb(19, 14, 2);
  display: block;
}
.swiper {
  padding: 10px;
}
.videoName {
  font-size: 20px;
  text-align: center;
  padding: 10px;
  text-shadow: 5px 2px 10px rgb(99, 2, 2);
  font-family: "宋体";
}
</style>

