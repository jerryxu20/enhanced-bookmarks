<template>
<span v-if="expanded" class="mask" @click="close"></span>
<div class="popup">
    <div class="icon" @click="expand">
        <span class="material-symbols-outlined">
            more_vert
        </span>
    </div>
    <ul v-if="expanded">
        <li class="end">Sort by name</li>
        <li>New Folder</li>
        <li class="end">New Bookmark</li>
        <li>Hide Bookmarks</li>
        <li class="end">Hide Folders</li>
        <li>Show hidden</li>
    </ul>
</div>


</template>

<script>
import Mask from '../../../src chromeapi/components/UI/Mask.vue'
export default {
    data() {
        return {
            expanded: false,
        };
    },
    methods: {
        expand() {
            this.expanded = !this.expanded;
        },
        close() {
            this.expanded = false;
        }
    },
    components: { Mask }
}

</script>

<style scoped>
div {
    display: flex;
    align-items: center;
    margin: 0px 0px;
}

.icon {
    height: 1.5rem;
    width: 1.5rem;
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    -webkit-user-select: none; /* Chrome/Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    color: var(--text-color);
    -o-user-select: none;
    user-select: none;    
}

.icon:hover {
    background-color: var(--secondary-color);
}
.material-symbols-outlined {
    font-size: 1rem;
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 200,
        'opsz' 40
}

.s-icon {
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

ul {
    position: absolute;
    top: calc(2.25rem);
    font-size: 0.7rem;
    right: 0.5rem;
    padding: 0;
    margin: 0;
    background-color: white;
    z-index: 2;
    color: black;
    width: fit-content;
    overflow: hidden;
    border-radius: 3px;
}

li {
    user-select: none;

    display: flex;
    justify-content: start;
    list-style: none;
    padding: 0.25rem 0.5em;
}

li:hover {
    background-color: gray;
}

.end {
    border-bottom: 1px solid black;
}

.mask {
    top: 0;
    left: 0;
    position: absolute;
    min-width: 400px;
    min-height: 550px;
    z-index: 2;
}

</style>