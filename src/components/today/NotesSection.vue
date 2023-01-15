<template>
    <div class="notes" @click="focus">
        <div v-if="showNotesIcon" class="notes-icon">
            <notes-icon></notes-icon>
        </div>
        <textarea placeholder="Notes" ref="desc" rows="1" @blur="close"
            :value="modelValue" @input="resize"></textarea>
    </div>
</template>

<script>
import NotesIcon from "./NotesIcon.vue";
export default {
    emits: ["update:modelValue"],
    data() {
        return {
            focused: false,
        };
    },
    props: {
        modelValue: {
            type: String,
            required: true,
        }
    },
    methods: {
        focus() {
            this.$refs.desc.focus();
            this.focused = true;
        },
        close() {
            const el = this.$refs.desc;
            this.focused = false;
            el.value = this.modelValue.trim();
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
            this.$emit("update:modelValue", el.value);
        },
        resize(e) {
            this.$emit("update:modelValue", e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
        },
    },
    computed: {
        showNotesIcon() {
            return !this.focused && this.modelValue.length === 0;
        }
    },
    components: { NotesIcon }
}


</script>

<style scoped>
div {
    display: flex;
}
.notes {
    padding: 0.25rem 1rem;
    align-items: center;
}

.notes-icon {
    align-items: center;
    padding-right: 0.25rem;
}

textarea {
    width: 100%;
    resize: none;
    outline: none;
    font: inherit;
    font-size: 11px;
    border: 0;
    padding: 0;
    height: auto;
    color: var(--text-color2);
    overflow-y: hidden;
    background-color: var(--background-secondary);
}

</style>