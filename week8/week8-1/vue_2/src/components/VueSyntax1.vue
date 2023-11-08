<template>
    <div>
        <p>{{ animal }}는 {{ food1 }}를 먹습니다</p>
        <a v-bind:href="naverUrl">naver</a><br />
        <input type="text" v-model="food2" />
        <p v-bind:class="{ red: food2 == 'apple', blue: food2 == 'banana' }">
            {{ animal }}는 {{ food2 }}를 좋아합니다.
        </p>
        </div>
</template>
    
<script>
export default {
    name: 'App',
    data() {
        return {
            animal: "원숭이", food1: "apple",
            food2: "banana", naverUrl: "https://www.naver.com",
        };
    }
}
</script>
<style>
.red {
    color: red;
}

.blue {
    color: blue;
}</style>
    