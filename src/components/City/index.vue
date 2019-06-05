<template>
  <div id="city">
    <input
      type="text"
      placeholder="搜搜城市..."
      class="searchCity"
      style="width:80%;padding:5px;border-radius:15px;border:none;"
      v-model="search"
    >
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in listFilters" :key="item.id" :title="item.nm" @click="choose(item)">
        <span v-if="item.isHot">热门</span>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      search: ""
    };
  },
  created() {
    this.axios("http://api.kele8.cn/agent/http://39.97.33.178/api/cityList").then(res => {
      console.log(res.data.data.cities);
      this.list = res.data.data.cities;
    });
  },
  computed: {
    listFilters: function() {
      return this.list.filter(list => {
        if (list.nm == undefined) {
          return "";
        } else {
          return list.nm.match(this.search);
        }
      });
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    choose(item) {
      console.log(item);
      this.$store.commit("localCity", {
        id: item.id,
        isHot: item.isHot,
        nm: item.nm,
        py: item.py
      });
      this.$router.push({ name: "NowPlaying" });
    }
  }
};
</script>

<style scoped>
</style>
