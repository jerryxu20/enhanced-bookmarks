<template>
    <div class="container">
        <span class="title" @click="expand">
            <span>
                Completed
            </span>
            <div class="icon">
                <svg :class="{ rotate: expanded }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    class="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
        </span>
        <div v-if="expanded">
            <CompletedStep></CompletedStep>
            <CompletedStep></CompletedStep>
        </div>
    </div>
</template>

<script>
import CompletedStep from "./CompletedStep.vue";
export default {
    watch: {
        expanded(newvalue) {
            console.log(newvalue);
        }
    },
    data() {
        return {
            expanded: false,
        };
    },
    methods: {
        expand() {
            this.expanded = !this.expanded;
        }
    },
    components: { CompletedStep }
}

</script>

<style scoped>
.icon {
    margin: 2px 2px;
    display: flex;
    align-items: center;
}

.title {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: var(--text-color);
    height: 22px;
    padding: 0;
}

.rotate {
    transform: rotate(-180deg);
}

.container {
    display: flex;
    padding: 0.25rem 1rem;
    flex-direction: column;
    justify-content: start;
}

.feather {
    stroke: var(--text-color);
    stroke-width: 1.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
    width: 15px;
    height: 15px;
    fill: var(--secondary-color);
    cursor: pointer;
    transition: transform 200ms ease-in-out 0ms;
}
</style>