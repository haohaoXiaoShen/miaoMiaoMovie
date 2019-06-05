<template>
  <div id="Localing">
    <div id="box">定位中</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#Localing {
  width: 30px;
  height: 30px;
  position: fixed;
  top: 45%;
  left: 45%;
  background-color: rgba(214, 134, 87, 0.919);
  border-radius: 50%;
  padding: 15px;
  z-index: 999;
  font-size: 12px;
  text-align: center;
  animation: Localing 3s linear infinite;
  line-height: 20px;
}
@keyframes Localing {
  0% {
    padding: 15px;
  }
  25% {
    padding: 20px;
  }
  50% {
    padding: 15px;
  }
  75% {
    padding: 20px;
  }
  100% {
    padding: 15px;
  }
}
</style>
