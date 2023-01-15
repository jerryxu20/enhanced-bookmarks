<template>
    <select @blur="reset" @select="updateDisplayed(chosenFolder)" v-model="chosenFolder">
        <option v-for="folder in folders" :value="folder.id" :key="folder.id">{{folder.title}}</option>
        <option>test</option>
        <option>style</option>
    </select>
</template>

<script>
export default {
    inject: ['updateDisplayed'],
    props: {
        folders: {
            type: Array,
            required: true,
        },
        defaultFolder: {
            type: String,
            required: false,
        }
    },
    methods: {
        updateChosen() {
            this.$emit('choose', this.chosenFolder);
        },
    },
    data() {
        return {
            chosenFolder: "",
            focused: false,
        };
    },
    activated() {
        this.chosenFolder = this.defaultFolder;
    },
    created() {
        this.chosenFolder = this.defaultFolder;
    }
}

</script>

<style scoped>
select {
    width: 40%;
    font-family: inherit;
    background-color: var(--secondary-color);
    color: var(--text-color2);
    border-color: var(--secondary-color);
    border-width: 2px;
    border-radius: 3px;
    outline: none;
}

select:items {
    border-top: 0px;
    outline: none;
    border-radius: 20px;
}
</style>