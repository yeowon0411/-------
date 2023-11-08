<template>
    <div>
        <p v-if="age >= 18"> 성인입니다</p>
        <p v-else-if="age < 18 && age >= 15"> 청소년 입니다</p>
        <p v-else> 어린이 입니다.</p>
        <hr>

        <p v-if="id == true"> {{ name }}님 반갑습니다.</p>
        <p v-else> 로그인하세요.</p>
        <hr>
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            age: 16,
            id: false,
            name: "김창복",
        };
    }
}
</script>
    