<template>
    <div>
        <h1  class="title" style="cursor: pointer;" @click="navigateTo('/')" >CRUD App</h1>
            <NuxtPage />
    </div>
</template>
<style scoped>
.title{
    text-align: center;
    background-color: var(--color-bg);
    color: var(--color-text);
}
</style>