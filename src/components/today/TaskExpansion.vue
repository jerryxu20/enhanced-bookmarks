<template>
        <!-- <div class="task-steps">
            <sub-task :hover="hover" @complete-sub="pass" v-for="item in subtasks" :key="item.id" :task="item">
            </sub-task>
            <add-task @confirm-sub="addSubtask"></add-task>
        </div> -->
        <!-- <div class="notes" @click="focus">
            <div v-if="showNotesIcon" class="notes-icon">
                <notes-icon></notes-icon>
            </div>
            <textarea placeholder="Notes" ref="desc" rows="1" id="fuckthis" class="test" @blur="closeTrim"
                :value="modelValue" @input="resize"></textarea>
        </div> -->
        <!-- <div class="url" @mouseenter="hoverLink" @mouseleave="unhoverLink">
            <div class="sun-icon" v-if="!activeLink">
                <ExternalIcon></ExternalIcon>
            </div>
            <UrlInput v-if="activeLink" :url="url" @submit-url="handleUrl"></UrlInput>
            <span class="link" v-if="!activeLink" >
                {{url}}
            </span>

            <div v-if="hoveringLink && !activeLink" class="sun-icon" @click="editLink">
                <EditIcon></EditIcon>
            </div>
        </div> -->
        <!-- <div class="notes buttons">
            <div class="start">
                <bar-button>
                    <div class="sun-icon">
                        <RepeatIcon></RepeatIcon>
                    </div>
                    Repeat
                </bar-button>
                <bar-button>
                    <div class="sun-icon">
                        <SunIcon></SunIcon>
                    </div>
                    Add to day
                </bar-button>
                <bar-button>
                    <div class="sun-icon">
                        <TrashIcon></TrashIcon>
                    </div> 
                    Delete
                </bar-button>
            </div>
            <div class="min-icon" @click="$emit('close')"> 
                <MinimizeIcon></MinimizeIcon>
            </div>
        </div> -->
    <!-- </div> -->
</template>

<script>
import TaskLine from './TaskLine.vue';
import TaskIcon from './TaskIcon.vue';
import NotesIcon from './NotesIcon.vue';
import CompleteCircle from './CompleteCircle.vue';
import CirclePlus from './CirclePlus.vue';
import SubTask from './SubTask.vue';
import AddTask from './AddTask.vue';
import SunIcon from './SunIcon.vue';
import XIcon from './XIcon.vue';
import MinimizeIcon from './MinimizeIcon.vue';
import RepeatIcon from './RepeatIcon.vue';
import TrashIcon from './TrashIcon.vue';
import ExternalIcon from './ExternalIcon.vue';
import EditIcon from './EditIcon.vue';
import UrlInput from './UrlInput.vue';
export default {
    emits: ['update:modelValue', 'close', 'remove-subtask'],
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        subtasks: {
            type: Array,
            required: false,
            default: [],
        },
        hover: {
            type: Boolean,
            required: true,
        },
        addedToDay: {
            type: Boolean,
            required: false,
            default: false,
        },
        url: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            notes: false,
            adding: false,
            focused: false,
            hoveringLink: false,
            activeLink: false,
        }
    },
    // computed: {
    //     showNotesIcon() {
    //         return !this.focused && this.modelValue.length === 0;
    //     }
    // },
    methods: {
        // handleUrl(load) {
        //     this.activeLink = false;
        //     this.url = load;
        // },
        // editLink() {
        //     this.activeLink = true;
        // },
        // focus() {
        //     this.$refs.desc.focus();
        //     this.focused = true;
        // },
        // pass(e) {
        //     this.$emit('remove-subtask', e);
        // },
        // addSubtask(task) {
        //     const sub = {
        //         name: task,
        //         index: this.subtasks.length,
        //         id: '539409', //generate this
        //     };
        //     this.subtasks.push(sub);
        // },
        // openNotes() {
        //     this.notes = true;
        // },
        // closeTrim() {
        //     const el = this.$refs.desc;
        //     this.focused = false;
        //     el.value = this.modelValue.trim();
        //     el.style.height = 'auto';
        //     el.style.height = `${el.scrollHeight}px`;
        //     this.$emit('update:modelValue', el.value);
        // },
        // resize(e) {
        //     this.$emit('update:modelValue', e.target.value);
        //     e.target.style.height = 'auto';
        //     e.target.style.height = `${e.target.scrollHeight}px`;
        // },
        // hoverLink() {
        //     this.hoveringLink = true;
        // },
        // unhoverLink() {
        //     this.hoveringLink = false;
        // }
    },
    created() {
        // this might not work in the end. Maybe it does because I use next tick and that is after mount. 
        // but if it is might as well move it to mount
        this.$nextTick(() => {
            console.log('refs')
            const el = this.$refs.desc;
            el.style.height = 'auto';
            el.style.height = `${el.scrollHeight}px`;
        });
    },
    mounted() {
        console.log('mounted')
    },
    components: { TaskLine, TaskIcon, NotesIcon, CompleteCircle, CirclePlus, SubTask, AddTask, SunIcon, XIcon, MinimizeIcon, RepeatIcon, TrashIcon, ExternalIcon, EditIcon, UrlInput }
}
</script>

<style scoped>
.expansion {
    display: flex;
    align-items: middle;
    flex-direction: column;
    justify-content: space-between;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    border: 0;
    user-select: none;
    width: calc(100%);
}

hr {
    height: 5px;
    background-color: black;
    color: black;
}
input {
    outline: none;
    /* border-radius: 5px; */
    border: none;
    background-color: var(--secondary-color);
    /* padding: 2px 4px; */
    width: 320px;
    font-size: 11px;
    color: var(--text-color2);
    border-bottom: 1px solid var(--text-color2);
}

.url:hover, .url:hover input {
    background-color: var(--background-color);
}

/* .link {
    text-decoration: underline;
} */
/* .url-blank {
    background-color: black;
    width: 200px;
} */
.task-steps {
    flex-direction: column;
    padding-bottom: 0.25rem;
}

.sun-icon {
    padding-right: 0.25rem;
}

.notes, .url{
    padding: 0.25rem 1rem;
    align-items: center;
}

.url {
    padding-right: 2rem;
}

.buttons {
    justify-content: space-between;
    padding-right: 0;
    padding-left: 0;
}

.min-icon {
    padding-right: 0.75rem;
}

.start {
    padding-left: 0.5rem;
}

button:hover {
    background-color: var(--background-color);
}

.notes-icon {
    align-items: center;
    padding-right: 0.25rem;
}

.ext-icon {
    padding-left: 0.5rem;
}

a {
    font-size: 11px;
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
}

textarea::placeholder {
    color: var(--text-color);
}

/* span {
    font-size: 11px;
} */

div {
    display: flex;
}

.expansion {
    padding-bottom: 0.25rem;
}
</style>