<template>
    <footer>
        <nav>
            <ul>
                <button @click="trackFolder">Track Folder</button>
                <button>second element</button>
            </ul>
        </nav>
    </footer>
</template>

<script>
export default {
    emits: ['add-folder'],
    props: {
        disable: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        trackFolder() {
            this.$emit('add-folder');
        }
    },
}
</script>
<style scoped>
nav {
    display: flex;
}
footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 3rem;
    background-color:#A0A1B2;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    margin:0 1rem;
    border: none;
    color: black;
    cursor: pointer;
    background-color: inherit;
    /* background-color: #343546; */
    -webkit-user-select: none; /* Chrome/Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    font-family: inherit;
    /* Not implemented yet */
    -o-user-select: none;
    user-select: none;    
}

ul {
    display: flex;
    justify-content: space-around;
    justify-items: center;
    padding: 0;
}

</style>