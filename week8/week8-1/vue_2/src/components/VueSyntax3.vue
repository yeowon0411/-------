<template>
    <div>
        <p> {{ animals }} </p>
        <hr />
        <p v-for="animal in animals" :key="animal">
            {{ animal }} </p>
        <hr />
         <p v-for="(user, index) in users" :key="index">
            {{ user }}</p>
        <hr />
    </div>
</template>
<script>
export default {
    data() {
        return {
            animals: ["monkey", "rat", "dog", "lion"],
            users: [
                { name: '김창복', job: 'developer', gender: 'male' },
                { name: '홍길동', job: 'designer', gender: 'male' },
                { name: '갑순이', job: 'pm', gender: 'female' },
            ],
        };
    }
}
</script>
    