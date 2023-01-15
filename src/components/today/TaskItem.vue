<template>
    <rounded-fixed :ml="0.5" hover>
        <div class="task-container">
            <li @click.self="expand" :class="{expanded: expanded}">
                <div class="start" @click.self="expand">
                    <CompleteCircle @click="complete" v-model="hover" pad></CompleteCircle>
                    <div class="taskname" @click.self="expand">
                        <EditArea v-if="expanded" id="tasktitle" v-model="task.title"></EditArea>
                        <span @click="expand" v-else>
                            {{ task.title }}
                        </span>
                    </div>
                </div>
                <div class="end" @click.self="expand">
                    <FavoriteIcon @click="favorite" :favorited="task.favorited"></FavoriteIcon>
                </div>
            </li>
        </div>
        <transition>
            <div class="expansion" @click.self="expand" v-if="expanded">
                <SubtaskSection @remove-subtask="removeSubtask" :hover="hover" :subtasks="task.subtasks"></SubtaskSection>
                <CompletedSubtasks></CompletedSubtasks>
                <NotesSection v-model="task.description"></NotesSection>
                <UrlSection :url="task.url" @url-update="changeUrl"></UrlSection>
                <ButtonSection @close="expand"></ButtonSection>
            </div>
        </transition>
    </rounded-fixed>
            <!-- <task-expansion :url="url" :hover="hover" v-model="task.description" :subtasks="task.subtasks" @remove-subtask="removeSubtask" v-if="expanded" key="do I need this"></task-expansion> -->
</template>

<script>
import TaskExpansion from './TaskExpansion.vue';
import BookmarkToolbar from '../../../src chromeapi/components/bookmarks/BookmarkToolbar.vue';
import EditArea from './EditArea.vue';
import FavoriteIcon from './FavoriteIcon.vue';
import CompleteCircle from './CompleteCircle.vue';
import SubtaskSection from './SubtaskSection.vue';
import NotesSection from './NotesSection.vue';
import UrlSection from './UrlSection.vue';
import ButtonSection from './ButtonSection.vue';
import CompletedSubtasks from './CompletedSubtasks.vue';
export default {
    emits: ['complete-task'],
    props: {
        initTask: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            hover: false,
            task: this.initTask,
            expanded: false,
            // complete: false,
        };
    },
    computed: {
    },
    methods: {
        complete() {
            this.$emit('complete-task', task.id);
        },
        removeSubtask(id) {
            this.task.subtasks = this.task.subtasks.filter((item) => {
                return item.id !== id;
            })
        },
        changeUrl(url) {
            console.log(url);
            this.task.url = url;
        },
        favorite() {
            this.task.favorited = !this.task.favorited;
        },
        expand() {
            this.expanded = !this.expanded;
        },
        check() {
            this.checked = !this.checked;
        },
    },
    components: { TaskExpansion, BookmarkToolbar, EditArea, FavoriteIcon, CompleteCircle, SubtaskSection, NotesSection, UrlSection, ButtonSection, CompletedSubtasks },
    created() {
        this.task.subtasks.push({
            id: 'fjslajfsj',
            name: "add x's to subtasks",
        });
        this.task.subtasks.push({
            id: "hopefully doesn't break",
            name: "complete url section"
        });
    }
}
</script>

<style scoped>
.task-container {
    width: 100%;
    display: flex;
}

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


li {
    display: flex;
    align-items: middle;
    justify-content: space-between;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    border: 0;
    -o-user-select: none;
    user-select: none;
    padding-left: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    /* border-radius: 8px; */
    /* padding: 0.5rem 0rem 0.5rem 0.5rem; */
    /* width: cacalc(100% - 0.5rem - 0.75rem); */
    width: 100%;
}

li:hover {
    background-color: var(--hover);

}
div, span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.start {
    display: flex;
    align-items: start;
    width: 100%;
}
.end {
    display: flex;
    align-items: start;
    padding-right: 0.75rem;
    padding-top: 2px;
}
.taskname {
    margin-left: 0.5rem;
    width: 300px;
    overflow: hidden;
    font-size: 1rem;
    display: flex;
    align-items: start;
}



</style>

<style>
.task-container:hover, .task-container:hover div div textarea {
    background-color: var(--hover);
}
</style>