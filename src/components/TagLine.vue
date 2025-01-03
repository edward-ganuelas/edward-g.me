<template>
    <p class="blockquote">
        {{tagLine}}
    </p>
</template>

<script setup>
defineProps({
    tagLine: {
        type: String,
        required: true,
        default: ''
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
