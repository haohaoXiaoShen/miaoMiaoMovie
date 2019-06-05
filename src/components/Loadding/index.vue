<template>
  <div id="Loadding">
    <div id="box">
      <div id="smaBox"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#box {
  width: 50px;
  height: 50px;
  background-color: antiquewhite;
  position: fixed;
  top: 45%;
  left: 45%;
  animation: loadding 1.3s infinite linear;
  transform-origin: center;
  border-radius: 50%;
}
#smaBox {
  width: 25px;
  height: 25px;
  background-color: rgba(209, 94, 27, 0.459);
  border-radius: 50%;
  margin: 0 auto;
}
@keyframes loadding {
  0% {
    padding: 0px;
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(90deg);
    padding: 10px;
  }
  50% {
    transform: rotateZ(180deg);
    padding: 0px;
  }
  75% {
    transform: rotateZ(270deg);
    padding: 10px;
  }
  100% {
    padding: 0px;

    transform: rotateZ(360deg);
  }
}
</style>
