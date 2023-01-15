<template>
    <div class="task-steps" :class="{change: change}" :style="styleObj">
        <!-- <transition-group> -->
            <sub-task :hover="hover" @height="changeHeight" @complete-sub="pass" v-for="item in subtasks" :key="item.id" :task="item"></sub-task>
            <add-task v-if="a" @height="changeHeight" @confirm-sub="addSubtask" key="add"></add-task>
            <add-task v-else @height="changeHeight" @confirm-sub="addSubtask" key="add2"></add-task>
        <!-- </transition-group> -->
    </div>
</template>

<script>
import AddTask from './AddTask.vue';
import SubTask from './SubTask.vue';

export default {
    props: {
        hover: {
            type: Boolean,
            required: true,
        },
        subtasks: {
            type: Array,
            required: false,
            default: [],
        },
    },
    data() {
        return {
            change: false,
            height: 24,
            a: true,
        }
    },
    watch: {
        height(val) {
            console.log(val);
        }
    },
    computed: {
        styleObj() {
            return {};
            if (this.change) {
                console.log('height changed')
                return {height: `${this.height}px`};
            } else {
                return {height: 'auto'};
            }
        }
    },
    methods: {
        changeHeight(add, subtract) {
            this.height += add;
            this.height -= subtract;
        },
        pass(e, h) {
            this.change = true;
            setTimeout(()=>{
                this.height -= h;
                this.$emit("remove-subtask", e);
            }, 0)
            setTimeout(() => {
                this.change = false;
            }, 0);
        },
        addSubtask(task, h) {
            this.a = !this.a;
            console.log(h);
            this.change = true;
            const sub = {
                name: task,
                index: this.subtasks.length,
                id: "539409", //generate this
            };
            setTimeout(()=>{
                this.height += h;
                this.subtasks.push(sub);
            }, 0)
            setTimeout(() => {
                this.change = false;
            }, 0);
        },
    },
    components: { AddTask, SubTask }
}
</script>

<style scoped>
div {
    display: flex;
}
.change {
    transition: height 300ms ease;
}
.task-steps {
    flex-direction: column;
    padding-bottom: 0.25rem;
}

.v-leave-active {
  background-color: none;
}
.v-move, .v-leave-active {
    transition: all 300ms ease;
}

.v-leave-to, .v-enter-from{
  opacity: 0;
  z-index: -1;
}

.v-enter-active {
    transition: all 300ms ease;
}

.v-enter-to, .v-leave-from {
    z-index: 2;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.v-leave-active {
  position: absolute;
}
</style>