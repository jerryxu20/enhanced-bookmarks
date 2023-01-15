<template>
<div class="card" :style="margin">
    <slot></slot>
</div>
</template>

<script>
export default {
    props: {
        push: {
            type: Boolean,
            required: false,
            default: false,
        },
        ml: {
            type: Number,
            required: false,
            default: 0,
        }
    },
    computed: {
        margin() {
            return {
                "margin-left": `${this.ml}rem`,
                "min-width": `calc(100% - ${this.ml}rem)`,
                // "justify-content": this.push ? 'space-between' : 'auto'
            };
        }
    }
}
</script>
<style scoped>
.card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--secondary-color);
    border-radius: 8px;
    margin-top: 8px;
    /* margin-right: 0.5rem; */
    width: fit-content;
}

</style>