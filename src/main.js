import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseContainer from './components/UI/BaseContainer.vue'
import BaseIcon from './components/UI/BaseIcon.vue'
import RoundedCard from './components/UI/RoundedCard.vue'
import RoundedFixed from './components/UI/RoundedFixed.vue'
import BarButton from './components/UI/BarButton.vue'
import BarIcon from './components/UI/BarIcon.vue';
const app = createApp(App)
app.component('base-card', BaseCard);
app.component('base-container', BaseContainer);
app.component('base-icon', BaseIcon);
app.component('rounded-card', RoundedCard);
app.component('rounded-fixed', RoundedFixed);
app.component('bar-button', BarButton);
app.component('bar-icon', BarIcon);
app.config.unwrapInjectedRef = true
app.mount('#app')
