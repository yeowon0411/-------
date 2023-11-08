<template>
    <main>
        <h2>{{ title }}</h2>
        Hell. {{ body }}
        </main>
</template>
<script>
export default {
    props: {
        title: { type: String },
        body: { type: String }
    },
};
</script>
<style scoped>
main {
    flex: 5;
    padding-left: 20px;
    height: 400px;
    background: blue;
    color: white
}
</style>