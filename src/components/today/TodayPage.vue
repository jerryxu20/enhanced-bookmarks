<template>
<today-header></today-header>
<base-container>
    <new-task @add-task="$emit('add-task', e)"></new-task>
    <task-item v-for="task in tasks" :initTask="task"></task-item>
</base-container>
</template>

<script>
import TodayHeader from './TodayHeader.vue'
import TaskItem from './TaskItem.vue'
import NewTask from './NewTask.vue'
export default {
    components: {
        TodayHeader,
        TaskItem,
        NewTask
    },
    inject: ['tasks'],
    data() {
        return {}
    },
}
</script>