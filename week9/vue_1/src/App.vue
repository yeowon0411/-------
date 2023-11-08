<template>
  <div>

    <HeaderCmt title="VueJs" />
    <div class="wrap">
      <NavCmt />
      <MainCmt title="Welcome" body="React" />
    </div>
  </div>
</template>
<script>
import HeaderCmt from "./components/HeaderCmt";
import NavCmt from "./components/NavCmt";
import MainCmt from "./components/MainCmt";
export default {
  components: { // component 등록
    HeaderCmt,
    NavCmt,
    MainCmt,
  }
}
</script>
  
<style scoped>.wrap {
  display: flex;
}</style>
  