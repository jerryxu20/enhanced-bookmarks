<template>
<div :class="{pad: pad}">
    <div class="circle" :class="{large: pad, hovering: selfhover}">
        <div @mouseleave="mouseOut" @mouseenter="mouseIn">
            <transition mode="out-in">
                <svg v-if="hovering"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="[size]" class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="[size]" class="feather feather-cirle">
                    <circle cx="12" cy="12" r="10"></circle>
                </svg>
            </transition>
        </div>
    </div>

</div>

<!-- <span class="material-symbols-outlined" @click="check">
    {{iconImage}}
</span> -->
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
    methods: {
        
    },
    components: { TaskIcon },
    data() {
        return {
            selfhover: false,
        }
    },
    computed: {
        hovering() {
            return this.modelValue || this.hover || this.selfhover;
        }
    },
    methods: {
        model(bool) {
            this.$emit('')
        },
        mouseIn() {
            this.$emit('update:modelValue', true);
            this.selfhover = true;
        },
        mouseOut() {
            this.$emit('update:modelValue', false);
            this.selfhover = false;
        }

    }
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
    cursor: pointer;
}

.subtask {
    width: 12px;
    height: 12px;
}

.v-enter-from, .v-leave-to{
    opacity: 0;
}

.v-enter-active, .v-leave-active {
    transition: opacity 100ms;
}
.v-enter-to, .v-leave-from{
    opacity: 1;
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