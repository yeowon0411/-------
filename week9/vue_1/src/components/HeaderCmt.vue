<template>
    <header>
        <h1>
            <a href="/">{{ title }}</a>
        </h1>
    </header>
</template>
<script>
export default {
    props: {
        title: { type: String }
    },
};
</script>
<style scoped>
header {
    height: 50px;
    background: burlywood;
    padding: 10px;
    text-align: center;
}

a {
    text-decoration: none;
}
</style>
    