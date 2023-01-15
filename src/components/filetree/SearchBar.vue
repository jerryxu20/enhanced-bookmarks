<template>
    <div class="toolbar">
        <div class="search">
            <div class="s-icon">
                <span class="material-symbols-outlined">
                    search
                </span>
            </div>
            <input type="text" placeholder="search" v-model.trim="search" @blur="unlock()" />
        </div>
        
        <button @click="track">Track</button> 
        <more-tool></more-tool>
    </div>
</template>

<script>
import MoreTool from './MoreTool.vue';

export default {
    emits: ["search-result", "unlock", "track"],
    data() {
        return {
            search: "",
        };
    },
    watch: {
        search(newSearch, oldSearch) {
            if (newSearch !== oldSearch) {
                this.$emit("search-result", newSearch.toLowerCase());
            }
        },
    },
    methods: {
        unlock() {
            this.$emit("unlock");
        },
        track() {
            this.$emit("track");
        }
    },
    components: { MoreTool }
}
</script>

<style scoped>
input {
    background-color: var(--secondary-color);
    display: block;
    font-size: 10px;
    width: 100%;
    border: none;
    padding: 0;
    border-radius: 5px;
    font: inherit;
    color: var(--text-color2);
    font-size: 0.9rem;
}

input::placeholder {
    color: var(--text-color2);
}

div {
    display: flex;
    align-items: center;
    margin: 0px 0px;
}

.material-symbols-outlined {
    font-size: 1rem;
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 200,
        'opsz' 40
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
button {
    font-family: inherit;
    display: flex;
    height: 1.5rem;
    align-items: center;
    justify-content: center;
    width: fit-content;
    border: none;
    margin-left: 0.5rem;
    -webkit-user-select: none; /* Chrome/Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    -o-user-select: none;
    user-select: none;
    background-color: var(--background-color);
    color: var(--text-color);
}

button:hover {
    background-color: var(--secondary-color);
}

.toolbar {
    background-color: var(--background-color);
    justify-content: space-between;
    border-bottom: 3px solid var(--accent-color);
    padding: 0.5rem 0.5rem;
    min-height: 25px;
}

.search {
    background-color: var(--secondary-color);
    height: 1.5rem;
    font-size: 10px;
    width: 75%;
    border: none;
    border-radius: 5px;
    font: inherit;
    color: var(--text-color2);
}

input:focus {
    outline: none;
}

.search:focus-within {
    filter: brightness(1.1);
    outline: none;
}

.s-icon {
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>