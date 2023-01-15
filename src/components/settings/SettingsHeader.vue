<template>
    <div class="toolbar">
        Settings
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

div {
    display: flex;
    align-items: center;
    margin: 0px 0px;
}

.material-symbols-outlined {
    font-size: 1rem;
    padding: 0.25rem 0.25rem;
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 200,
        'opsz' 40
}

.toolbar {
    background-color: var(--background-color);
    justify-content: space-between;
    border-bottom: 3px solid var(--accent-color);
    padding: 0.5rem 0.5rem;
    min-height: 25px;
}
span {
    user-select: none;
}
</style>