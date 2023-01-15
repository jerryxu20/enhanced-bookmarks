<template>
<div class="icon">
    <span class="material-symbols-outlined" v-if="show">{{iconType}}</span>
</div>
</template>

<script>
export default {
    props: {
        expanded: {
            type: Boolean,
            required: true,
        },
        show: {
            type: Boolean,
            required: false,
            default: true,
        }
    },
    computed: {
        iconType() {
            if (this.expanded) {
                return "expand_more"
            } else {
                return "chevron_right"
            }
        }
    }
}
</script>

<style scoped>
.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}

span {
    /* cursor: pointer; */
}
</style>