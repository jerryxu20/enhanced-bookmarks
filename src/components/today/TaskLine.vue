<template>
<div class="line">
    <div class="start">
        <slot></slot>
    </div>
    <div class="end">
        <slot name="end"></slot>
    </div>
</div>
</template>

<style scoped>

.line {
    justify-content: space-between;
}

div {
    display:flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
}
</style>