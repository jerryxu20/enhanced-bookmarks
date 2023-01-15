<template>
<span v-if="enabled" @click="close"></span >
<div>
    <button @click="show">{{displayedName}}</button>
    <ul v-if="enabled" :class="{enabled: enabled}">
        <dropdown-item @choose="changeName" v-for="folder in folders" :id="folder.id" :title="folder.title" :key="folder.id"></dropdown-item>
    </ul>
</div>

</template>


<script>
import DropdownItem from "./DropdownItem.vue";
export default {
    inject: ['displayedId'],
    props: {
        folders: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            expanded: false,
            name: null,
        };
    },
    computed: {
        displayedName() {
            if (this.name) {
                return this.name;
            } else {
                return this.findName();
            }
        },
        enabled() {
            return this.expanded && this.folders.length > 1;
        }
    },
    methods: {
        changeName(name) {
            console.log(name);
            this.name = name;
            this.expanded = false;
        },
        findName() {
            const found = this.folders.find(item => {
                return item.id === this.displayedId;
            });
            if (found) {
                return found.title;
            } else return "";
        },
        show() {
            this.expanded = !this.expanded;
        },
        close() {
            console.log('this was called');
            this.expanded = false;
        }
    },
    created() {
        this.name = this.findName();
    },
    deactivated() {
        this.expanded = false;
    },
    components: { DropdownItem }
}
</script>

<style scoped>
ul {
    position: absolute;
    z-index: 9999;
    left: 0.5rem;
    top: calc(2.5rem - 4px);
    list-style: none;
    margin: 0;
    padding:0;
    max-width: 45%;
    min-width: 40%;
    border-radius: 5px;
    /* color: black; */
    /* padding: 0.25rem 0.25rem; */
    border: 1px solid var(--background-alt);
    background-color: var(--secondary-color);
    outline: none;
    overflow:hidden;
    box-shadow: 0 2px 4px 0 rgba(51, 52, 53, 0.2);
}

button {
    width: 100%;
    border: none;
    font-family: inherit;
    background-color: var(--background-alt);
    color: var(--text-color);

    border-radius: 3px;
    outline: none;
    padding: 0;
    margin: 0;
    height: 1.5rem;
}

.enabled button:hover {
    filter: brightness(1.2);
}

div {
    width: 100%;
    z-index: 2;
}

span {
    top: 0;
    left: 0;
    position: absolute;
    min-width: 400px;
    min-height: 550px;
    z-index: 1;
}
</style>