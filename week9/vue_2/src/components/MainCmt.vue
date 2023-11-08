<template>
    <main>
        <h2>{{ title }}</h2>
        <h2>Hell. {{ body }}</h2>
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