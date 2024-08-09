<script setup>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

setTimeout(function () {
    router.push("/");
}, 5000);

let count = ref(5);
let message = ref(`In the next five seconds you will be redirected to the home page`);
function countDown() {
    //console.log(count.value);
    count.value = count.value - 1;
    let counter = setTimeout(countDown, 1000);
    if (count.value <= 0) {
        count.value = '⌛️';
        //message.value = 'Countdown is over now';
        message.value = 'Forward to the home page now';
        clearTimeout(counter);
    }
}
countDown();
</script>

<template>
    <div>
        <h1>404 Error Page</h1>
        <!-- Showing entry of errorPath
        <p>{{ $route.params.errorPath.pop() }}</p>
        -->
        <p>
            Unavailable path ...???<br />
            {{ $route.params.errorPath }}<br />
        </p>
        <!--<h3 @click="$router.push('/')">&larr; back to Home page</h3>-->
        <h3 id="counter">{{ message }}<br><span>{{ count }}</span></h3>
    </div>
</template>

<style lang="css" scoped>
h1,
h3 {
    display: block;
    width: 115%;
    margin: auto;
    text-align: center;
    border: transparent solid thin;
    border-radius: 10px;
}

h3 {
    color: #fff;
}

p {
    width: 115%;
    margin: auto;
    text-align: center;
    border: transparent solid thin;
    border-radius: 10px;
}

h3#counter span {
    font-size: 180%;
    color: orange
}
</style>
