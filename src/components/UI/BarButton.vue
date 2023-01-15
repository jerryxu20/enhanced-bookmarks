<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    /* position: absolute; */
    font-family: inherit;
    display: flex;
    height: 1.5rem;
    align-items: center;
    justify-content: center;
    width: fit-content;
    color: var(--text-color);
    border: none;
    margin-left: 0.5rem;
    background-color: var(--background-color);
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: background-color;
}

button:hover {
    background-color: var(--hover);
    color: var(--text-primary);
    border-color: var(--secondary-color);
}
</style>