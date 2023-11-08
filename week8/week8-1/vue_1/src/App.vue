<template>
<div>
  <HeaderCmt/>
        <div class="wrap">
            <NavCmt />
            <MainCmt />
        </div>
    </div>
    </template>
<script>
// 자식 Component
        import HeaderCmt from "@/components/HeaderCmt";
        import NavCmt from "@/components/NavCmt";
        import MainCmt from "@/components/MainCmt";

        export default {
          components: { // component 등록
            HeaderCmt,
            NavCmt,
            MainCmt
          }
};
</script>
<style scoped>
.wrap {
  display: flex;
}
</style >