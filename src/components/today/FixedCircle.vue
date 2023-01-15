<template>
<div :class="{pad: pad}">
    <div class="circle" :class="{large: pad}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="[size]" class="feather feather-cirle">
            <circle cx="12" cy="12" r="10"></circle>
        </svg>
    </div>

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
        },
        modelValue: {
            type: Boolean,
            required: false,
            default: false,
        },
        hover: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    components: { TaskIcon },
}

</script>

<style scoped>

.circle {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 300ms ease 0ms;
    z-index: 2;
}

.hovering {
    background-color:rgba(128,134,139,.04);
}
.large {
    width: calc(1rem + 2px);
    height: calc(1rem + 2px);
}
.start {
    align-items: center;
}

div {
    display: flex;
    align-items: center;
}
.pad {
    display: block;
    padding-top: 4px;
}
.feather-check {
    fill-opacity: 0;
}
.feather {
    stroke: var(--text-color);
    stroke-width: 1.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
    width: 15px;
    height: 15px;
    fill: var(--secondary-color);
}

.subtask {
    width: 12px;
    height: 12px;
}
</style>