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
    height: 1.2rem;
    align-items: center;
    justify-content: center;
    width: fit-content;
    border: none;
    margin-left: 0.5rem;
    background-color: var(--hover);
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: background-color;
    border-radius: 3px;
}

button:hover {
  background-color: var(--dark-hover);
  border-color: var(--dark-hover);
}
</style>