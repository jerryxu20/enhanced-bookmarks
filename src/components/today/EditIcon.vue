<template>
<transition>
    <svg v-if="show" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
</transition>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: false,
        }
    }
}
</script>
<style scoped>
.feather {
    fill: var(--secondary-color);
    stroke: var(--text-color);
    stroke-width: 1.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
    width: 12px;
    height: 12px;
    cursor: pointer;
    
}


.v-enter-from, .v-leave-to {
    opacity: 0.5;
}

.v-enter-active {
    transition: opacity 0.1s ease-in;
}

.v-leave-active {
    transition: opacity 0.1s ease-out;
}

.v-enter-to, .v-leave-from {
    opacity: 1;
}
</style>