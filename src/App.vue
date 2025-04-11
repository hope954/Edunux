<script setup>

</script>

<template>
  <router-view />
  <div id="building"></div>
</template>

<style lang="less" scoped>
#app{
  // width: 100%;
  // height: 100%;
}
#building{
  // overflow: auto;
  background:url("./assets/image/backgroudpic.png");
  width:100%;			//大小设置为100%
  height:100%;			//大小设置为100%
  top: 0;
  left: 0;
  position:fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size:100% 100%;
  z-index: -1;
  }
</style>