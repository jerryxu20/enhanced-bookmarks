<template>
    <bookmark-toolbar @random="openRandom" :folderDetails="folderDetails" :folders="folderDetails"></bookmark-toolbar>
    <base-container :bottom="0" bottomPadding="0.5rem">
        <transition-group tag="ul">
            <bookmark-item v-for="item in displayedItems" :itemData="item" :key="item.id"></bookmark-item>
        </transition-group>
    </base-container>
</template>

<script>
import bTree from '../../../subtree.json';
import BookmarkItem from './BookmarkItem.vue';
import FolderSelector from './FolderSelector.vue';
import BookmarkToolbar from './BookmarkToolbar.vue';
import BookmarkDropdown from './BookmarkDropdown.vue';
import { computed } from 'vue'

export default {
    inject: ["folders", "ids", "defaultFolder"],
    provide() {
        return {
            updateDisplayed: this.updateDisplayed,
            displayedId: computed(() => this.displayedId),
        }
    },
    data() {
        return {
            displayedId: this.defaultFolder,
        };
    },
    methods: {
        openRandom() {
            const items = this.displayedItems;
            const idx = Math.floor(Math.random() * items.length);
            const url =  items[idx].url;
            chrome.tabs.create({
                active: true,
                url,
            });
        },
        updateDisplayed(id) {
            this.displayedId = id;
        },
    },
    computed: {
        displayedItems() {
            const found = this.folders.find(folder => {
                return folder.id === this.displayedId;
            });
            if (found) {
                return found.children;
            } else {
                return [];
            }
        },
        folderDetails() {
            return this.folders.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                }
            });
        },
    },
    activated() {
    },
    created() {
    },
    components: { BookmarkItem, FolderSelector, BookmarkToolbar, BookmarkDropdown }
}

</script>

<style scoped>
ul {
    padding: 0;
    margin: 0.25rem 0rem 0rem 0.5rem;
}

</style>
