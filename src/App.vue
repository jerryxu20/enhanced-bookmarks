<template>
<div id="extension" :class="classObj">
    <keep-alive>
        <component :is="tab"></component>
    </keep-alive>
    <the-nav @switch="changeComponent" :tab="tab"></the-nav>
</div>

</template>

<style>

</style>

<script>
import TheNav from './components/layout/TheNav.vue';
import FilePage from './components/filetree/FilePage.vue';
import BookmarksPage from './components/bookmarks/BookmarksPage.vue'
import SettingsPage from './components/settings/SettingsPage.vue';
import TodayPage from './components/today/TodayPage.vue';
import { computed } from 'vue'


// testing
import bTree from '../subtree.json';
import nTree from '../ntree.json';
import tree from '../tree.json';
import {getTasks, setTasks, dateKey} from '../backend/back.js';
export default {
    components: {
        TheNav,
        FilePage,
        BookmarksPage,
        TodayPage,
        SettingsPage,
    },
    provide() {
        return {
            addFolder: this.addFolder,
            ids: computed(() => this.ids),
            defaultFolder: computed(()=> this.config.defaultFolder),
            folders: computed(()=>this.folders), 
            loading: computed(()=>this.loading),
            setAccent: this.setAccent,
            toggleMode: this.toggleMode,
            tasks: computed(() => this.tasks),
            addTask: this.addTask,
        }
    },
    computed: {
        classObj() {
            let classString = '';
            if (this.config.mode == 'dark') {
                classString = 'dark '
            }
            if (this.config.accent == 'orange') {
                classString += 'orange';
            } else if (this.config.accent == 'green') {
                classString += 'green';
            } else {
                classString += 'blue';
            }
            return classString;
        }
    },
    data() {
        return{
            tab: 'today-page',
            ids: [],
            config: {
                        "mode": "auto",
                        "accent": "orange",
                        "defaultFolder": '28',
                    },
            folders: [],
            loading: true,
            tasks: [],
        };
    },

    methods: {
        addTask(taskname) {
            let id = String((new Date()).getTime())
            const task = {
                "title": taskname,
                "url": "",
                "subtasks": [],
                "favorited": false,
                "id": id,
                "description": "",
            }
            this.tasks.push(task)
            console.log('from inside vue')
            console.log(this.tasks)
            setTasks(this.tasks);
            return;
        },
        changeComponent(tab) {
            this.tab = tab;
        },
        addFolder(id) {
            this.getFolder(id);
            this.ids.push(id);
        },
        updateTasks() {
            const tasksObj = tree.children[0].children[10].children[33].title;
            this.tasks = JSON.parse(tasksObj).children; 
            return;
            const date = dateKey();
            chrome.storage.sync.get([date]).then((res) => {
            const taskobj = res[date];
            if (res[date] === undefined) return;
            for (const prop in taskobj) {
                this.tasks.push(taskobj[prop]);
            }
            });
        },
        addTree(id, folders) {
            for (let folder of folders) {
                console.log(folder);
                if (folder.id === id) {
                    this.folders.push(folder);
                    return;
                }
                this.addTree(id, folder.children || []);
            }
            return;

        },
        getFolder(id) {
            id = String(id);
            this.addTree(id, tree.children);
        },
        getConfig() {
            return;
            chrome.storage.sync.get('config').then((res) => {
                if (res[config] !== null) {
                    this.config = res[config];
                }
            });
            return;
        },
        setup() {
            this.config.defaultFolder = '28';
            this.getConfig();
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.config.mode = 'dark';
                this.config.pref = 'dark';
            } else {
                this.config.mode = 'light';
                this.config.pref = 'light';
            }
            this.addTree(this.config.defaultFolder, tree.children);
            this.updateTasks();
        },
        setAccent(color) {
            this.config.accent = color;
        },
        toggleMode(mode) {
            if (mode == 'dark') {
                this.config.mode = 'dark';
            } else if (mode == 'light') {
                this.config.mode = 'light';
            } else {
                this.config.mode = this.config.pref;
            }
        }
    },
    created() {
        this.setup();
   }

}
</script>

<style scoped>
</style>

<style>
body {
    margin: 0;
    padding: 0;
}
.orange {
    --accent-color: var(--accent-red);
}
.blue {
    --accent-color: var(--accent-blue);
}
.green {
    --accent-color: var(--accent-green);
}

.dark {
    --background-color: #1A1A1B;
    --background-alt: #666666;
    --background-lighter: hsla(0,0%,100%,.1);
    --secondary-color: #323232;
    --secondary-color: #2d2d2d;
    --text-color: #F4F4F4;
    --text-color2:rgba(239,241,246,.75);
    --hover:#5d5d5d;
    /* --hover:var(--accent-green); */
}

:root {
  --background-color: #F1F3F5;
  --background-alt: #ccc;
  --background-lighter: hsla(0,0%,100%,.1);
  --background-lighter: blue;
  --secondary-color: #ffffff;
  --text-color: black;
  --text-color2:rgba(0,0,0,.75);
  --hover: #f8f9fa;
  --dark-hover: #dfdfdf;
  --accent-green: #59a15c;
  --accent-blue: #28b9d9;
  --accent-red: #e86a3a;
  --accent-color: var(--accent-red);
}
#extension {
  display:flex;
  flex-direction: column;
  width: 400px;
  height: 550px;
  position: relative;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  font-family: 'Poppins', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
}

</style>