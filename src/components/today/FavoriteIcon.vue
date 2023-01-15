<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather" :class="{filled: favorited}">
        <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
        </polygon>
    </svg>
</template>

<script>
import TaskIcon from './TaskIcon.vue';

export default {
    props: {
        favorited: {
            type: Boolean,
            required: true,
        }
    },
    watch: {
    },
    methods: {
    },
    components: { TaskIcon }
}
</script>

<style scoped>
.feather {
    fill: var(--secondary-color);
    stroke: var(--text-color);
    stroke-width: 1.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
    width: 18px;
    height: 18px;
    cursor: pointer;
}

@keyframes fillAnimation{
    0% {
        opacity: 0;
        transform: scale(0.4);
    }

    100% {
        transform: scale(1);
    }
}
.filled {
    stroke: var(--accent-color);
    fill: var(--accent-color);
    animation: 100ms ease 0ms 1 normal none running fillAnimation;
}
</style>