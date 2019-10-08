<template>
    <p class="blockquote">
        {{tagLine}}
    </p>
</template>

<script>
export default {
    name: 'TagLine',
    props: {
        tagLine: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
