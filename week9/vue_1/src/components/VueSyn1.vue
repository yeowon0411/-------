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
import HeaderCmt from "./HeaderCmt";
import NavCmt from "./NavCmt";
import MainCmt from "./MainCmt";
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