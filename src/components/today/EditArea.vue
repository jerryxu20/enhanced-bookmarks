<template>
    <textarea :class="{fit: focus}" @click="focus = true" @input="resize" rows="1" :id="id" class="textarea" :value="modelValue" ref="taskname"></textarea>
</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: String,
            required: false,
        },
        id: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            focus: false,
        }
    },
    methods: {
        resize(e) {
            this.focus = true;
            console.log(e.data)
            console.log(e.inputType);
            if (e.data === null && (e.inputType === 'insertLineBreak' || e.inputType === 'insertText')) {
                e.target.value = this.modelValue.trim();
                e.target.blur();
            }
            this.$emit('update:modelValue', e.target.value);
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
        },
    },
    created() {
        this.$nextTick(() => {
            const el = this.$refs.taskname;
            el.style.height = `${el.scrollHeight}px`;
        });
    }

}
</script>

<style scoped>

textarea {
    font-size: 1rem;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    font-family: inherit;
    color: var(--text-color);
    resize: none;
    height: auto;
    width: fit-content;
    box-sizing: border-box;
    overflow-y: hidden;
    background-color: var(--background-secondary);
}

.fit {
    width: 280px;
}

</style>