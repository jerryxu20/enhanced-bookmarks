<template>
<!-- {firstline: margin === 0 && index == 0, lastline: margin === 0 && index == size} -->
    <li>
        <div class="line" @click.self="selectBookmark(bookmark.id)" :style="computeMargin">
            <nest-icon @click="toggleNest" :show="bookmark.children.length > 0" :expanded="expanded"></nest-icon>
            <div class="title" @click="selectBookmark(bookmark.id)" :class="{'selected': selectedId == bookmark.id}">
                {{bookmark.title}}
            </div>
        </div>
        <div v-show="showChildren">
            <file-tree v-for="child in bookmark.children" :margin="margin + 1" :bookmark="child"></file-tree>
        </div>
    </li>
</template>

<script>
import NestIcon from './NestIcon.vue';
export default {
    components: {
        NestIcon,
    },
    inject: ['selectFolder', 'selectedId', 'forceExpand', 'unlock'],
    props: {
        bookmark: {
            type: Object,
            required: true,
        },
        margin: {
            type: Number,
            required: true,
        },
        index: {
            type: Number,
            required: false,
            default: -1,
        },
        size: {
            type: Number,
            required: false,
            default: -1,
        }
    },
    data() {
        return {
            expanded: true,
        }
    },

    watch: {
        forceExpand(value) {
            if (value) {
                this.expanded = true;
            }
        }
    },
    methods: {
        selectBookmark(id) {
            if (this.selectedId == id) {
                id = '-1';
            }
            this.selectFolder(id);
        },
        toggleNest() {
            this.expanded = !this.expanded;
            if (this.bookmark.children.length === 0) {
                this.selectBookmark(this.bookmark.id);
            }
        },
    },
    computed: {
        showChildren() {
            return this.expanded || this.forceExpand;
        },
        hasChildren() {
            return this.bookmark.children.length > 0;
        },
        computeMargin() {
            return {
                'padding-left': this.margin + 'rem',
            };
        },
    }
}
</script>

<style scoped>
.line {
    display: flex;
    align-items: center;
    height: 1.5rem;
    padding-top: 2px;
    padding-bottom: 2px;
    /* overflow: hidden; */
    /* white-space: nowrap; */
    /* text-overflow: ellipsis; */
    /* border-radius: 5px; */
    /* margin-bottom: 500px; */
    /* width: 100%; */
    /* width: fit-content; */
}
.line:hover {
    background-color: antiquewhite;
}
.title {
    cursor:pointer;
    white-space: nowrap;
    /* overflow: hidden; */
}
.selected {
    color:var(--accent-color);
}

.firstline {
    padding-top: 0.5rem;
}

.lastline {
    padding-bottom: 0.5rem;
}

li {
    -webkit-user-select: none;     
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    /* pointer-events: none; */
    /* width: 100%; */
}

div {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    z-index: 2;
}
</style>