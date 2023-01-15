<template>
    <div class="toolbar">
        <div>
            <span class="material-symbols-outlined">
                arrow_back
            </span>
            <!-- <span @click="toggleCalendar" class="material-symbols-outlined">
                calendar_month
            </span> -->
            <div class="date">
                {{date}}
            </div>
        </div>
        <div>
            <span class="material-symbols-outlined">
            arrow_forward
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            calendarExpanded: false,
        };
    },
    computed: {
        toggleCalendar() {
            this.calendarExpanded = !this.calendarExpanded;
        },
        date() {
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            return (new Date()).toLocaleDateString('en-US', options);
        }
    }
}
</script>

<style scoped>

div {
    display: flex;
    align-items: center;
    margin: 0px 0px;
}

.material-symbols-outlined {
    font-size: 1rem;
    padding: 0.25rem 0.25rem;
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 200,
        'opsz' 40
}

.toolbar {
    background-color: var(--background-color);
    justify-content: space-between;
    border-bottom: 3px solid var(--accent-color);
    padding: 0.5rem 0.5rem;
    min-height: 25px;
}
.date {
    /* margin-left: 0.5rem; */
}

span {
    user-select: none;
}
</style>