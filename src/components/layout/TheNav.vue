<template>
  <footer>
    <nav>
      <ul>
        <button @click="switchTabs('file-page')" :class="{ 'selected': tab === 'file-page'}">Add Bookmarks</button>
        <button @click="switchTabs('bookmarks-page')" :class="{ 'selected': tab === 'bookmarks-page'}">Bookmarks</button>
        <button @click="switchTabs('today-page')" :class="{'selected': tab == 'today-page'}">Today</button>
        <button @click="switchTabs('settings-page')" :class="{'chosen': tab === 'settings-page'} ">
          <span class="material-symbols-outlined">
            settings
          </span>
        </button>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  props: {
    tab: {
      type: String,
      required: true,
    }
  },
  emits: ['switch'],
  methods: {
    switchTabs(tab) {
      this.$emit('switch', tab);
    }
  },

}
</script>

<style scoped>
.selected {
  background-color: var(--accent-color);
}

nav {
  height: 100%;
  width: 100%;
}

footer {
  min-height: 3rem;
  max-height: 3rem;
  background-color: var(--background-color);
  border-top: 3px var(--background-alt) solid;
}

button {
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  border: none;
  color: var(--text-color);
  font-size: 1rem;
  height: 1.5rem;
  /* height: 1rem; */
  cursor: pointer;
  background-color: inherit;
  -webkit-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  font-family: inherit;
  z-index: 2;
}

ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  height: 100%;
  width: 100%;
  margin: 0;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' -25,
  'opsz' 24
}

.chosen {
  color: var(--accent-color);
}

</style>