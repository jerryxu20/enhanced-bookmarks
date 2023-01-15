<template>
<div class="feather" :class="[size, {filled: fill}]" :style="styleObj">
    <slot></slot>
</div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            required: false,
            default: 'med',
        },
        fill: {
            type: Boolean,
            required: false,
            default: false,
        },
        width: {
            type: Number,
            required: false,
            default: -1
        }
    },
    computed: {
        styleObj() {
            if (this.width != -1) {
                return {
                    width: `${this.width}px`,
                    height: `${this.width}px`,
                }
            }
            return {};
        }
    },

}
</script>
<style scoped>

.filled {
    stroke: var(--accent-color);
    fill: var(--accent-color);
}
.feather {
    fill: var(--secondary-color);
    stroke: var(--text-color);
    stroke-width: 1.5px;
    stroke-linecap: round;
    stroke-linejoin: round; 
}

.med {
    width:18px;
    height:18px;
}

.small {
    width: 12px;
    height: 18px;
}
</style>