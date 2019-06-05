<template>
  <div id="Goback">
    <header>
      <span class="back" @click="Goback">返回</span>
    </header>
  </div>
</template>

<script>
export default {
  name: "Goback",
  methods: {
    Goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0px;
  background-color: rgb(226, 17, 17);
  z-index: 999;
}
.back {
  color: aliceblue;
  text-align: center;
  line-height: 50px;
  padding-left: 15px;
}
</style>
