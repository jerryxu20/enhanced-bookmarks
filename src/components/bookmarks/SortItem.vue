
<template>
<li>
    <div class="text">{{text}}</div>
    <div class="box">        
        <span class="material-symbols-outlined" >
            arrow_downward
        </span>
    </div>
</li>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
.text {
    padding-left: 0.5rem;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 0.5rem;
    font-size: 0.8rem;
    width: 100%;
    justify-content: end;
}
.box {
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 8px;
    padding-left: 8px;
    border-left: 1px var(--background-alt) solid;

}

div {
    height: 19px;
    font-size: inherit;
    cursor: pointer;
    display:flex;
    align-items: center;
    background-color: var(--background-color);
}

div:hover {
    /* background-color: aliceblue; */
    filter: brightness(1.5);
}

li {
    display:flex;
    justify-content: end;
    align-items: center;
    border-top: 1px solid var(--background-alt);
    font-size: 0.8rem;
    /* width: 5.5rem; */
}

.material-symbols-outlined {
    font-size: 1rem;
    line-height: 1;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 200,
    'opsz' 24,
}


li:nth-child(1) {
    border-top: none;
}
</style>