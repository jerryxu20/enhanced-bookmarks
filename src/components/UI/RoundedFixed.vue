<template>
<div class="card" :style="margin" :class="{'hover': hover}">
    <slot></slot>
</div>
</template>

<script>
export default {
    props: {
        ml: {
            type: Number,
            required: false,
            default: 0,
        },
        hover: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    computed: {
        margin() {
            return {
                "margin-left": `${this.ml}rem`,
                "width": `calc(100% - ${this.ml}rem - 4px)`
            };
        }
    }
}
</script>
<style scoped>
.card {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--secondary-color);
    border-radius: 8px;
    margin-top: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: var(--background-color);
}

.hover:hover {
    border-color: var(--accent-color);
}

</style>