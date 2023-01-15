<template>
    <search-bar @unlock="unlock" @search-result="filterResults" @track="handleAddFolder"></search-bar>
    <base-container @click.self="setSelectedId('-1')" :bottom="0" horizontal>
        <rounded-card :ml="0.5" v-if="filteredBookmarkTree.length > 0">
            <ul>
                <file-tree v-for="(bookmark, index) in filteredBookmarkTree" :bookmark="bookmark" :margin="0" :key="bookmark.id" :index="index" :size="filteredBookmarkTree.length - 1"></file-tree>
            </ul>
        </rounded-card>
    </base-container>

</template>
<script>
import bTree from '../../../tree.json';
import FileTree from "./FileTree.vue";
import SearchBar from './SearchBar.vue';
import { computed } from 'vue'
import TheFooter from './TheFooter.vue';
import RoundedCard from '../UI/RoundedCard.vue';
export default {
    components: {
    FileTree,
    SearchBar,
    TheFooter,
    RoundedCard
},
    emits: ['add-folder'],
    inject: ['addFolder'],
    data() {
        return {
            bookmarkTree: [],
            selectedId: '',
            filteredBookmarkTree: [],
            forceExpand: false,
            selectedIsHidden: false,
        };
    },
    provide() {
        return {
            selectFolder: this.setSelectedId,
            selectedId: computed(() => this.selectedId),
            forceExpand: computed(() => this.forceExpand),
            unlock: this.unlock,
        }
    },
    methods: {
        handleAddFolder() {
            if (this.selectedIsHidden) {
                return;
            }
            console.log(this.selectedId);
            this.addFolder(String(this.selectedId));
            this.selectedId = '';
        },
        unlock() {
            console.log('unlocked')
            this.forceExpand = false;
        },
        filterResults(search) {
            if (search == '') {
                this.filteredBookmarkTree = this.bookmarkTree;
                this.selectedIsHidden = false;
                return;
            }
            this.forceExpand = true;
            this.selectedIsHidden = true;
            this.filteredBookmarkTree = this.filterFolderSearch(this.bookmarkTree, search);
        },
        setSelectedId(something) {
            this.selectedId = something;
        },
        newFilter(tree, term) {

        },
        filterFolderSearch(tree, term) {
            const new_folder = [];
            for (let obj of tree) {
                if (obj.title.toLowerCase().includes(term)) {
                    if (obj.id == this.selectedId) {
                        this.selectedIsHidden = false;
                    }
                    const new_obj = {
                        ...obj,
                        children: this.filterFolderSearch(obj.children, term),
                    }
                    new_folder.push(new_obj);
                } else {
                    const children = this.filterFolderSearch(obj.children, term);
                    if (children.length > 0) {
                        if (obj.id == this.selectedId) {
                            this.selectedIsHidden = false;
                        }
                        const new_obj = {
                            ...obj,
                            children: children,
                        };
                        new_folder.push(new_obj);
                    }

                }
            }
            return new_folder;      
        },
        filterFolders(tree) {
            const new_folder = [];
            for (let obj of tree) {
                if (!obj.url) {
                    const new_obj = {
                        ...obj,
                        children: this.filterFolders(obj.children),
                    }
                    new_folder.push(new_obj);
                }
            }
            return new_folder;      
        }
    },
    created() {
        const bookmarks = bTree.children;
        this.bookmarkTree = this.filterFolders(bookmarks);
        this.filteredBookmarkTree = this.bookmarkTree;
        // This works
        // chrome.bookmarks.getTree(results => {
        //     this.bookmarkTree = this.filterFolders(results[0].children);
        //     this.filteredBookmarkTree = this.bookmarkTree;
        // });
    },
}
</script>
<style scoped>
ul {
    /* margin: 0.5rem 0.5rem; */
    margin: 0;
    list-style-type: none;
    padding: 0;
    width: 100%;
}

</style>