<template>
    <div class="step">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-check">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div class="title">
            <span>
                text name something test words I am just writing now
            </span>
        </div>
    </div>

</template>


<script>
</script>


<style scoped>
span {
    width: 280px;
    word-wrap: normal;
    white-space: pre-wrap;
    word-break: normal;
}
.title {
    display: flex;
    padding-left: 0.5rem;
    color: var(--text-color2);
    width: 280px;
    /* height: 50px; */
    height: 100%;
    overflow-wrap: break-word;
}

.feather {
    stroke: var(--text-color2);
    stroke-width: 1.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
    width: 15px;
    height: 15px;
    fill: var(--secondary-color);
    cursor: pointer;
}

.step {
    text-decoration: line-through;
    min-height: 20px;
    z-index: 2;
    display: flex;
    align-items: center;
    font-size: 13px;
    padding-left: 1rem;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: var(--secondary-color);
    overflow-x: hidden;
}
</style>