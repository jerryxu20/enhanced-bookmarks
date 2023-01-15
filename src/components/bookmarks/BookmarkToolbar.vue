<template>
<div class="toolbar">
    <bookmark-dropdown :folders="folders"></bookmark-dropdown>
    <div class="button-group">
        <bar-button @click="random">
            Random
        </bar-button>
        <filter-tool></filter-tool>
        <sort-tool></sort-tool>
    </div>
</div>
</template>

<script>
import FolderSelector from './FolderSelector.vue';
import BookmarkDropdown from './BookmarkDropdown.vue';
import FilterTool from './FilterTool.vue';
import SortTool from './SortTool.vue';
export default {
    emits: ['random'],
    components: { FolderSelector, BookmarkDropdown, FilterTool, SortTool },
    props: {
        folders: {
            type: Array,
            required: true,
        },
    },
    methods: {
        random() {
            this.$emit('random');
        },
    }
}
</script>

<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: space-between;
}



.toolbar {
    background-color: var(--background-color);
    padding: 0.5rem 0.75rem 0.5rem 0.5rem;
    border-bottom: 3px solid var(--accent-color);
    min-height: 25px;
}
</style>