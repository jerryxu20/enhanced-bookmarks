<template>
    <div class="step" @mouseenter="hovering = true" @mouseleave="hovering = false" @click.self="turnOn" :class="{focused: active}" ref="step">
        <complete-circle v-if="active" size="subtask"></complete-circle>
        <circle-plus @click="toggle" v-else size="subtask"></circle-plus>
        <textarea 
            @click="turnOn" 
            @blur="submitTask" 
            rows="1" 
            v-model.trim="taskname" 
            placeholder="Add"
            @input="resize" 
            ref="addSubtask"
            :class="{focused: active}"
        ></textarea>
        <span v-if="hovering && active" @mouseenter="block = true" @mouseleave="block = false">
            <XIcon></XIcon>
        </span>
    </div>
</template>
<script>
import CompleteCircle from './CompleteCircle.vue';
import CirclePlus from './CirclePlus.vue';
import XIcon from './XIcon.vue';
export default {
    emits: ['confirm-sub', 'height'],
    components: {
    CompleteCircle,
    CirclePlus,
    XIcon
},
    data() {
        return {
            active: false,
            taskname: '',
            hovering: false,
            block: false,
        }
    },
    watch: {
        active(val) {
            console.log(val);
        }
    },
    methods: {
        focus() {
            this.focused = !this.focused;
            if (this.focused) {
                this.$refs.taskinput.focus();
            }
        },
        turnOn() {
            this.active = true;
            this.$refs.addSubtask.focus();
        },
        toggle() {
            this.active = !this.active;
            if (this.active) {
                this.$refs.addSubtask.focus();
            }
        },
        resize(e) {
            console.log('resize')
            if (e.data === null && (e.inputType === 'insertLineBreak' || e.inputType === 'insertText')) {
                e.target.blur();
            }
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
        },
        submitTask() {
            this.active = false;
            this.$refs.step.style.height = 'auto';
            this.$refs.addSubtask.style.height = 'auto';
            console.log('submit')
            if (this.taskname.length > 0 && !this.block) {
                this.$emit('confirm-sub', this.taskname, 0);
            }
            this.taskname = '';

        },
    },
    
}
</script>
<style scoped>
.step {
    display: flex;
    min-height: 20px;
    align-items: center;
    font-size: 13px;
    padding-left: 2rem;
    padding-top: 2px;
    padding-bottom: 2px;
}

li:hover, li:hover textarea{
    background-color: var(--hover);
}

textarea {
    padding: 0;
    margin: 0;
    border: 0;
    font: inherit;
    height: auto;
    color: var(--text-color);
    margin-left: 0.5rem;
    outline: 0;
    resize: none;
    width: calc(300px - 0.5rem - 12px);
    background-color: var(--background-secondary);
}

textarea::placeholder {
    color: var(--text-color);
    /* color: black; */
}

span {
    padding-left: 3px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.icon {
    display: flex;
    align-items: center;
}

.focused {
    background-color: var(--hover);
}
</style>