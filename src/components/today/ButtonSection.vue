<template>
    <div class="buttons">
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
    </div>
</template>

<script>
import MinimizeIcon from './MinimizeIcon.vue';
import SunIcon from './SunIcon.vue';
import RepeatIcon from './RepeatIcon.vue';
import TrashIcon from './TrashIcon.vue';

export default {
    emits: ['close'],
    components: {
        MinimizeIcon,
        SunIcon,
        RepeatIcon,
        TrashIcon,
    }
}

</script>

<style scoped>
div {
    display: flex;
}


.min-icon {
    margin-right: 0.75rem;
    padding: 0.25rem 0.25rem;
    /* background-color: salmon; */
    border-radius: 50%;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4,0,0.2,1);
    transition-property: background-color;
    /* transition: background 300ms ease 0ms;; */
}

.min-icon:hover {
    background-color: salmon;
    /* rgba(128,134,139,.04); */
}
.sun-icon {
    padding-right: 0.25rem;
}
.start {
    padding-left: 0.5rem;
}
.buttons {
    padding: 0.25rem 1rem;
    align-items: center;
    justify-content: space-between;
    padding-right: 0;
    padding-left: 0;
}
</style>