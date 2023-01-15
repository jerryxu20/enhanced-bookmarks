<template>
<!-- two states. One is displaying url. Second is input -->
    <div class="url">
        <div class="sun-icon" v-if="!openInput">
            <ExternalIcon></ExternalIcon>
        </div>
        <UrlInput 
            v-if="openInput"
            :default="url"
            :active="focus"
            @submit="handleUrl"
            @close="input = false"
            key="urlinput"
        >
        </UrlInput>
        <div @mouseenter="hover = true" @mouseleave="hover = false">
            <span class="link" v-if="!input"  >
                {{url}}
            </span>
            <div class="edit" @click="edit">
                <EditIcon v-if="!openInput" :show="hover && !openInput"></EditIcon>
            </div>
        </div>

    </div>
</template>


<script>
import EditIcon from './EditIcon.vue';
import ExternalIcon from './ExternalIcon.vue';
import UrlInput from './UrlInput.vue';
export default {
    emits: ["url-update"],
    props: {
        url: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            input: false,
            focus: false,
            hover: false,
        };
    },
    computed: {
        openInput() {
            return this.input || this.url.length === 0;
        }
    },
    methods: {
        hoverLink() {
            this.hover = true;
        },
        unhoverLink() {
            this.hover = false;
        },
        handleUrl(url) {
            console.log(url);
            this.input = false;
            this.focus = false;
            this.$emit('url-update', url);
        },
        edit() {
            this.input = true;
            this.focus = true;
            this.hover = false;
        },
    },
    created() {
        this.input = this.url.length == 0;
    },
    components: { EditIcon, ExternalIcon, UrlInput, }
}

</script>

<style scoped>
div {
    display: flex;
    align-items: center;
}

.sun-icon {
    padding-right: 0.25rem;
}

.url {
    padding: 0.25rem 1rem;
    align-items: center;
}

.sun-icon {
    padding-right: 0.25rem;
    /* padding-left: 1rem; */
}

.edit {
    padding-left: 0.5rem;
    /* transition: 1s; */
}

span {
    text-decoration: underline;
    font-size: 11px;
    color: var(--text-color2);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 300px;
}

input {
    outline: none;
    border: none;
    background-color: var(--secondary-color);
    width: 320px;
    font-size: 11px;
    color: var(--text-color2);
    border-bottom: 1px solid var(--text-color2);
}

</style>