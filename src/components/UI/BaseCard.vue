<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    padding: 0.5rem 0.5rem 0 0.5rem;
    margin: 0 auto;
    height: fit-content;
    width: calc(100% - 2rem)
}
</style>