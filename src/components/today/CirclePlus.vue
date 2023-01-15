<template>
    <div :class="{pad: pad}" @mouseenter="hover = true" @mouseleave="hover = false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="[size]" class="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    </div>
</template>

<script>
import TaskIcon from './TaskIcon.vue';
export default {
    props: {
        size: {
            type: String,
            required: false,
            default: '',
        },
        pad: {
            type: Boolean,
            required: false,
            default: false,
        }
    },

}

</script>

<style scoped>
.pad {
    padding-top: 2px;
}

.feather {
    fill: var(--secondary-color);
    stroke: var(--text-color);
    stroke-width: 1.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
    width: 15px;
    height: 15px;
    cursor: pointer;
}

.subtask {
    width: 12px;
    height: 12px;
    /* padding-top: 0; */
}

/* .material-symbols-outlined {
    cursor: pointer;
    font-size: 1rem;
    min-width: 1rem;
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
} */
</style>