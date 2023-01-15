<template>
    <div @click="move">
        <span class="bar" :class="{toggledBar: toggled}"></span>
        <span class="knob" :class="{toggledKnob: toggled}"></span>
    </div>
</template>

<script>
export default {
    emits: ['toggle'],
    data() {
        return {
            toggled: true,
        }
    },
    methods: {
        move() {
            this.toggled = !this.toggled;
            this.$emit('toggle', this.toggled);
        }
    }
}
</script>
<style scoped>
div {
    position: relative;
    cursor: pointer;
    display: block;
    min-width: 34px;
    width: 34px;
    height: 16px;
}
.bar {
    position: absolute;
    width: 28px;
    height: 12px;
    border-radius: 8px;
    z-index: 0;
    top: 2px;
    background-color: rgb(154, 160, 166);
    transition: background-color linear 80ms;
}
.toggledKnob {
    transform: translate3d(18px, 0, 0);
    background-color: var(--accent-color) !important;
    /* background-color: rgba(255, 69, 48) !important; */
}
.toggledBar {
    background-color: var(--accent-color) !important;
    /* background-color: rgba(255, 69, 48) !important; */
    opacity: 0.5;
}
.knob {
    position: relative;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: rgb(218, 220, 224);
    z-index: 1;
    display: block;
    transition: transform linear 80ms, background-color linear 80ms
}
</style>