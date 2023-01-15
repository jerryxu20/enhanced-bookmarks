<template>
    <span v-if="expanded" class="mask" @click="close"></span>
    <div :class="{open: expanded}">
        <bar-button @click="expand">
            <span class="material-symbols-outlined" >
                filter_list
            </span>
            Filter
        </bar-button>        
        <ul v-if="expanded">
            <filter-item text="bookmarks" @filter="pass" :start="false"></filter-item>
            <filter-item text="tasks" @filter="pass" :start="false"></filter-item>
        </ul>
    </div>
</template>

<script>
import FilterItem from './FilterItem.vue';
export default {
    watch: {
        expanded(newvalue) {
            console.log(newvalue);
        }
    },
    data() {
        return {
            expanded: false,
            bookmarkCheck: false,
            taskCheck: false,
        };
    },
    methods: {
        expand() {
            this.expanded = !this.expanded;
        },
        close() {
            console.log('this was called')
            this.expanded = false;
        },
        flipBookmark() {
            this.bookmarkCheck = !this.bookmarkCheck;
        },
        flipTask() {
            this.taskCheck = !this.taskCheck;
        }
    },
    deactivated() {
        this.expanded = false;
    },
    components: { FilterItem }
}
</script>

<style scoped>
ul {
    position: absolute;
    z-index: 9999;
    top: calc(2.5rem - 4px);
    left: 254.434px;
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: var(--secondary-color);
    outline: none;
    overflow:hidden;
    width: fit-content;
    z-index: 2;
}

div {
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
}

/* .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24,
} */

.open {
    z-index: 2;
}

span {
    z-index: 2;
}

.mask {
    top: 0;
    left: 0;
    position: absolute;
    min-width: 400px;
    min-height: 550px;
    z-index: 1;
}


</style>