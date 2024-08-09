<script setup>
import { useAuthStore } from "@/stores/auth-store.js";
import { useWizardStore } from "../stores/store.js";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const store = useWizardStore();
const router = useRouter();

const doCreateAccount = async () => {
    try {
        const { data, error } = await authStore.createAccount({
            ...store.accountInfos
        });
        if (error) throw error;
        console.log('💌', data?.user?.email);
        router.replace("/")
    } catch (error) {
        //console.log("ERROR: " + error.message);
        alert("ERROR: " + error.message);
    }
}
</script>

<template>
    <div class="bucket">
        <h2>Summary</h2>
        <ol>
            <li v-for="(value, key, /*index*/) in store.accountInfos">
                <!--{{ index }}.--> {{ key }} : <span v-if="value">{{ value }}</span>
                <span v-else>.......</span>
            </li>
        </ol>
        <!--<pre>{{ JSON.stringify(store.accountInfos, null, 2) }}</pre>-->
        <button @click="() => store.previousStep()">Previous</button>
        <button type="button" @click="doCreateAccount">Create account</button>
    </div>
</template>

<style lang="css" scoped>
h2 {
    text-align: center;
    padding: 1rem;
    border-bottom: #fff solid thin;
    margin-top: -1rem;
    margin-bottom: 1rem;
}

div.bucket {
    width: 90%;
    margin: auto;
    background: #575757;
    border-radius: .7rem;
}

li {
    text-align: left;
}

button,
button[type=submit] {
    margin: 20px auto 0;
    width: 100%;
}
</style>