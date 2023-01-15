<template>
<div class="contained" :class="{'horizontal': horizontal}" :style="bottomMargin">
    <slot></slot>
</div>
</template>

<script>
export default {
    props: {
        horizontal: {
            type: Boolean,
            required: false,
            default: false,
        },
        bottom: {
            type: Number,
            required: false,
            default: 1,
        },
        bottomPadding: {
            type: String,
            required: false,
            default: '0',
        }
    },
    computed: {
        bottomMargin() {
            return {
                marginBottom: `${this.bottom}rem`,
                paddingBottom: `${this.bottomPadding}`
            };
        }
    }
}
</script>
<style scoped>
.contained {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    width: calc(100% - 3px);
    padding: 0;
    margin: 0;
    padding-left: 3px;
    z-index: 1;
}
.horizontal {
    overflow-x: scroll;
}
.horizontal::-webkit-scrollbar {
    height: 13px;
}
.contained::-webkit-scrollbar {
    background-color: transparent;
    width: 13px;
}
.contained::-webkit-scrollbar-track {
    background-color: transparent;
}
.contained::-webkit-scrollbar-thumb {
    background-color: #cbd1d1;
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
}
.contained::-webkit-scrollbar-button {
    display: none;
}
.contained::-webkit-scrollbar-corner {
    display: none;
}
</style>
