<template>
    <li v-if="displayedId != id" @click="selected">
        <div>
            {{title}}
        </div>
    </li>
</template>

<script>
export default {
    inject: ['updateDisplayed', 'displayedId'],
    emits: ['choose'],
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String, 
            required: true,
        }
    },
    methods: {
        selected() {
            this.$emit('choose', this.title);
            this.updateDisplayed(this.id);
        }
    }
}
</script>
<style scoped>
li {
    cursor: pointer;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 4px;
    padding-top: 4px;
    display: flex;
    max-width: 100%;
    font-family: inherit;
    font-size: 0.8rem;
    color: var(--text-color);
    background-color: var(--background-color);
    border-top: 1px solid var(--background-alt);
}

li:nth-child(1) {
    border-top: none;
}
li:hover {
    /* filter: brightness(1.2); */
    color: var(--text-color);
    background-color: 	#282C34;
}

div {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
}
</style>