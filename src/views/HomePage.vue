<script setup>

</script>

<template>
    <div>
        <h1>Home Page</h1>
    </div>
</template>
<style scoped>
div {
    width: 82vw;
    height: 50vh;
    margin: 3em auto;
    position: relative;
    border: teal solid thin;
    border-radius: 1em;
    text-align: center;
}

@media (min-width: 1024px) {

    div {
        width: 50vw;
        height: 50vh;
        position: relative;
        border: teal solid thin;
        border-radius: 1em;
    }

    h1 {
        position: absolute;
        left: 50%;
        top: 35%;
        transform: translate(-50%, -35%);
        text-align: center;
        font-size: 4vw;
        font-weight: bold;
    }
}
</style>
