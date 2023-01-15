<template>
<settings-header></settings-header>
<base-container :bottom="0">
    <rounded-card :ml="0.5">
        <div class="item">
            <div class="label">Theme</div>
            <select v-model="mode">
                <option value="auto">Auto</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </div>
        <div class="item">
            <div class="label">Accent</div>
            <div class="colors">
                <div class="color green" @click="setAccent('green')"></div>
                <div class="color blue" @click="setAccent('blue')"></div>
                <div class="color orange" @click="setAccent('orange')"></div>
            </div>
        </div>
        <div class="item">
            <div class="label">Toggle</div>
            <cr-toggle></cr-toggle>
        </div>
        <div>remove completed subtasks</div>
        <div>show date</div>
        <div>show progress</div>
        <div>color coded dates</div>
        
    </rounded-card>
</base-container>

</template>

<script>
import SettingsHeader from './SettingsHeader.vue';
import BaseCard from '../../../src chromeapi/components/UI/BaseCard.vue';
import RoundedFixed from '../../../src chromeapi/components/UI/RoundedFixed.vue';
import CrToggle from './CrToggle.vue'
export default {
    components: { SettingsHeader, BaseCard, RoundedFixed, CrToggle},
    inject: ['setAccent', 'toggleMode'],
    data() {
        return {
            mode: 'auto',
        }
    },
    watch: {
        mode(newvalue) {
            this.toggleMode(newvalue);
        }
    },
    methods: {
        test(something) {
            console.log(something);
        }
    }

}
</script>

<style scoped>
.item {
    font-size: 14px;
    display:flex;
    margin: 0.5rem 0.5rem;
    padding: 0;
    width: calc(400px - 2.5rem);
    justify-content: space-between;
    align-items: center;
}

select {
    color: var(--text-color2);
    background-color: var(--background-color);
    border: none;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    max-width: 100%;
    outline: none;
}

select:focus {
    box-shadow: 0 0 0 2px rgba(26, 115, 232, .4);
}

.color {
    height: 16px;
    width: 16px;
    background-color: white;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    border-radius: 2px;
    border: 1px solid;
}

.colors {
    display: flex;
}

.orange {
    background-color: var(--accent-color);
    border-color: var(--accent-color);
}

.green {
    background-color: var(--accent-green);
    border-color: var(--accent-green);
}

.blue {
    background-color: var(--accent-blue);
    border-color: var(--accent-blue);
}
</style>