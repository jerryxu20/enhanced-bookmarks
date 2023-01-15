<template>
<li>
    <div @click="check" class="checkbox">
        <span class="material-symbols-outlined box" >
            {{iconName}}
        </span>
    </div>
    <div>{{text}}</div>
</li>

</template>

<script>
export default {
    emits: ['filter'],
    data() {
        return {
            checked: true,
        }
    },
    computed: {
        iconName() {
            if (this.checked) {
                return 'select_check_box';
            }
            return 'check_box_outline_blank';
        }
    },
    props: {
        text: {
            type: String,
            required: true,
        },
        start: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        check() {
            this.checked = !this.checked;
            this.$emit('filter', this.text);
        }
    },
    created() {
        this.checked = this.start;
    }
}
</script>

<style scoped>
li {
    cursor: pointer;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 4px;
    padding-top: 4px;
    display: flex;
    max-width: 100%;
    font-family: inherit;
    font-size: 0.8rem;
    color: var(--text-color);
    background-color: var(--background-color);
    border-top: 1px solid var(--background-alt);
}

li:nth-child(1) {
    border-top: none;
}
li:hover {
    /* filter: brightness(1.2); */
    color: var(--text-color);
    background-color: 	#282C34;
}

.box {
    font-size: 1rem;
}

.material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 200,
    'opsz' 24,
}

.checkbox {
    background-color: var(--background-color);
    user-select: none;    
    -webkit-user-select: none; /* Chrome/Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
}

.checkbox:hover {
    filter: brightness(1.25);
}

</style>