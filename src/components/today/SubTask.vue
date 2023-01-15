<template>
    <transition>
        <div class="step" @mouseenter="enter" @mouseleave="leave" @click.self="focus" :class="{hovering: hovering}" ref="step">
            <div>
                <complete-circle @click="startAnimation(task.id)" size="subtask" :hover="hover"></complete-circle>
                <textarea 
                    rows="1"
                    v-model.trim="task.name"
                    @blur="unfocus"
                    @input="resize"
                    ref="taskinput">
                </textarea>
            </div>
            <div>

            </div>
            <span @click="$emit('delete-sub', task.id)" :class="{hovering: hovering}">
                <XIcon v-show="(hovering || focused) && input"></XIcon>
            </span>
        </div>
    </transition>
</template>
<script>
import CompleteCircle from './CompleteCircle.vue';
import XIcon from './XIcon.vue';
export default {
    emits: ['delete-sub', 'complete-sub', 'height'],
    components: {
        CompleteCircle,
        XIcon
    },
    props: {
        hover: {
            type: Boolean,
            required: true,
        },
        task: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            focused: false,
            hovering: false,
            input: true,
            startHeight: 0,
        }
    },
    methods: {
        startAnimation(id) {
            this.input = false;
            this.hovering = false;
            this.focused = false;
            this.$emit('complete-sub', id, this.$refs.step.offsetHeight);
        },
        enter() {
            if (this.input) {
                this.hovering = true
            }
        },
        leave() {
            if (this.input) {
                this.hovering = false
            }
        },
        focus() {
            this.focused = !this.focused;
            if (this.focused) {
                this.$refs.taskinput.focus();
            }
        },
        unfocus() {
            this.focused = false;
            let height = this.$refs.step.offsetHeight;
            this.$emit('height', height, this.startHeight);
            this.startHeight = height;
        },
        resize(e) {
            if (e.data === null && (e.inputType === 'insertLineBreak' || e.inputType === 'insertText')) {
                e.target.blur();
            }
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
        },
    },
    mounted() {
        this.$refs.taskinput.style.height = 'auto';
        this.$refs.taskinput.style.height = `${this.$refs.taskinput.scrollHeight}px`;  
        this.startHeight = this.$refs.step.offsetHeight;
        this.$emit('height',this.startHeight, 0);
    },
    created() {

    }
    
}
</script>
<style scoped>

div {
    display: flex;
}

.step  {
    opacity: 1;
    min-height: 20px;
    z-index: 2;
    display: flex;
    align-items: center;
    font-size: 13px;
    padding-left: 2rem;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: var(--secondary-color);
    justify-content: space-between;
}

textarea {
    padding: 0;
    margin: 0;
    border: 0;
    font: inherit;
    height: auto;
    color: var(--text-color);
    /* color: black; */
    /* transition: background 200ms ease 0ms; */
    /* background-color: salmon; */
    background-color: var(--secondary-color);
    margin-left: 0.5rem;
    outline: 0;
    resize: none;
    /* width: 100%; */
    width: calc(300px - 0.5rem - 12px);
}

textarea:hover {
    background-color: var(--hover);
}

.hovering, .hovering textarea{
    background-color: var(--hover)
}

span {
    padding-left: 3px;
    padding-right: 21px;
    display: flex;
    align-items: center;
    background-color: var(--secondary-color);
}

.icon {
    display: flex;
    align-items: center;
}
</style>