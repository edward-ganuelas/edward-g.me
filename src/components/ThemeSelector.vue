<template>
    <div class="themeSelector">
        <div class="btn-group" role="group" aria-label="Select Your Theme">
            <button type="button" class="btn btn-light" @click="changeTheme('light')">Light</button>
            <button type="button" class="btn btn-dark" @click="changeTheme('dark')">Dark</button>
        </div>
    </div>
</template>

<script setup>
import { useApplicationStore } from '@/store/useApplicationStore';
const store = useApplicationStore()

const emits = defineEmits(['clicked'])

function changeTheme(theme){
    const body = document.querySelector('body');
    switch(theme){
    case 'light':
        store.isDarkTheme = false;
        body.classList.replace('dark', 'light');
        break;
    case 'dark':
        store.isDarkTheme = true;
        body.classList.replace('light', 'dark');
        break;
    }
    emits('clicked');
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.themeSelector{
    margin: 0 auto;
    width: 50%;
    text-align: center;
}
</style>
