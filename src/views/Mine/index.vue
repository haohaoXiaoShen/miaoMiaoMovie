<template>
  <div id="Login">
    <header>喵喵中心</header>
    <p class="iconfont icon-wode"></p>
    <form id="loginPage">
      <div class="account">
        <input type="button" value="账号" class="btn">
        <input type="text" placeholder="请输入账号" id="account" v-model="acc">
      </div>
      <div class="passwd">
        <input type="button" value="密码" class="btn">
        <input type="password" placeholder="请输入密码" id="passwd" v-model="psd">
      </div>

      <input type="button" value="登录" class="login">
      <input type="button" value="注册" class="regist" @click="goRegist">
    </form>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from "@/components/Tabbar";
export default {
  name: "Login",
  data() {
    return {
      acc: "",
      psd: ""
    };
  },
  methods: {
    goRegist() {
      this.$router.push({ name: "regist" });
    }
  },
  components: {
    tabbar
  }
};
</script>

<style scoped>
header {
  background-color: red;
  color: rgba(255, 255, 255, 0.945);
  padding: 10px;
  text-align: center;
  font-size: center;
}
form {
  width: 100%;
  margin: 10px auto;
  margin-left: 10%;
}
#account,
#passwd {
  width: 65%;
  border: none;
  border: 1px solid red;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.603);
  margin-top: 10px;
  height: 40px;
}
.btn {
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  background-color: red;
  color: aliceblue;
  border: none;
  font-size: 15px;
  height: 45px;
}
.login,
.regist {
  background-color: rgb(209, 131, 14);
  border: none;
  margin-left: 10%;
  margin-top: 10px;
  width: 30%;
  padding: 5px;
  color: aliceblue;
}
.icon-wode {
  font-size: 3rem;
  text-align: center;
  color: red;
  margin-top: 50px;
}
</style>