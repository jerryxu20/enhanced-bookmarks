<template>
<rounded-fixed hover>
    <li>
        <span class="material-symbols-outlined" @click="check">
        {{iconImage}}
        </span>
        <div class="info" @click="expand">
            <span class="title">
                {{itemData.title}}
            </span>
            <div class="url" @click="openPage">
                {{itemData.url}}
            </div>
        </div>
    </li>
</rounded-fixed>
</template>

<script>
export default {
    props: {
        itemData: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            checked: false,
            expanded: false,
        };
    },
    methods: {
        expand() {
            this.expanded = !this.expanded;
        },
        check() {
            this.checked = !this.checked;
        },
    },
    computed: {
        iconImage() {
            if (this.checked) {
                return 'check_circle';
            } else {
                return 'circle'
            }
        }
    },
}
</script>

<style scoped>
li {
    display:flex;
    align-items: center;
    justify-content: start;
    -webkit-user-select: none; /* Chrome/Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    border: 0;
    -o-user-select: none;
    user-select: none; 
    padding: 0.5rem 0rem 0.5rem 0.5rem;
    width: calc(100% - 0.75rem - 1px);
    /* margin-left: 4px; */
}
/* 
span, div, li{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
} */
.title {
    font-size: 1rem;
}

.url {
    font-size: 0.75rem;
    color:  var(--text-color2);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
}
.info {
    margin-left: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
}

.material-symbols-outlined {
  cursor: pointer;
  font-size: 1rem;
  min-width: 1rem;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

</style>