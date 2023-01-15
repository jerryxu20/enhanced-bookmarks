<template>
    <rounded-fixed :ml="0.5" hover>
        <div class="task-container" @click.self="expanded = !this.expanded">
            <li>
                <div class="start">
                    <FixedCircle pad></FixedCircle>
                    <div class="taskname">
                        <NewArea v-model="taskName"></NewArea>
                    </div>
                </div>
            </li>
        </div>
        <div class="buttons">
            <div>
                <!-- <MedButton>repeat</MedButton> -->
            </div>
            <div class="end">
                <MedButton @click="addTask(taskName)">Add</MedButton>
            </div>
        </div>
    </rounded-fixed>
</template>

<script>
import EditArea from './EditArea.vue';
import CompleteCircle from './CompleteCircle.vue';
import FixedCircle from './FixedCircle.vue';
import NewArea from './NewArea.vue';
import MedButton from '../UI/MedButton.vue';
export default {
    inject: ['addTask'],
    data() {
        return {
            hover: false,
            taskName: '',
            expanded: false,
        };
    },
    computed: {
    },
    methods: {
    },
    components: { EditArea, CompleteCircle, FixedCircle, NewArea, MedButton },
    created() {
    }
}
</script>

<style scoped>
.buttons {
    width: 100%;
    background-color: var(--background-alt);
    display: flex;
    justify-content: space-between;
    padding-top: 4px;
    padding-bottom: 4px;
}
.task-container {
    width: 100%;
    display: flex;
}

div {
    display: flex;
}

span {
    color: blue;
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
    padding-right: 0.5rem;
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