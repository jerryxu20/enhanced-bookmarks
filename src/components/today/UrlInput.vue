<template>
    <input @click="focus = true" type="text" @blur="submit" v-model.trim="url" placeholder="url"
        autocomplete="off" ref="urlInput" @keyup.enter="forceBlur" />
    <div class="icon"  @mouseenter="closed = true" @mouseleave="closed = false">
        <XIcon v-if="active || focus"></XIcon>
    </div>
    <!-- {{closed}} -->
    <!-- {{url}} -->
</template>

<script>
import XIcon from './XIcon.vue';
export default {
    emits: ["submit", "close"],
    data() {
        return {
            focus: false,
            closed: false,
            url: this.default,
        };
    },
    props: {
        default: {
            type: String,
            required: true,
            default: '',
        },
        active: {
            type: Boolean,
            required: true,
        }
    },
    watch: {
        active(value) {
            if (value) {
                this.$refs.urlInput.focus();
                this.focus = true;
            }
        }
    },
    methods: {
        forceBlur() {
            this.$refs.urlInput.blur();
        },
        submit(e) {
            // console.log(e.target.value);
            console.log(this.url);
            // return;
            this.focus = false;
            if (this.closed) {
                this.$emit('close');
                this.url = '';
                return;
            }
            this.$emit('submit', this.url);
        }
    },
    mounted() {
        console.log('mounted');
        if (this.active) {
            this.$refs.urlInput.focus();
        }
    },
    components: { XIcon }
}
</script>

<style scoped>

input {
    outline: none;
    border: none;
    background-color: var(--secondary-color);
    width: 320px;
    font-size: 11px;
    color: var(--text-color2);
    border-bottom: 1px solid var(--text-color2);
}


.icon {
    /* background-color: black; */
    width: 1rem;
    height: 1rem;
    transition: 0.3s;
}

</style>