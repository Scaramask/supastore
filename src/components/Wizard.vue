<script setup>
import WizardStep1 from "./WizardStep1.vue"
import WizardStep2 from "./WizardStep2.vue"
import WizardSummary from "./WizardSummary.vue"

import { useWizardStore } from "../stores/store.js";
const store = useWizardStore();
</script>

<template>
    <div class="bucket">
        <div v-if="store.step === 1">
            <WizardStep1 />
        </div>
        <div v-if="store.step === 2">
            <WizardStep2 />
        </div>
        <div v-if="store.step === 3">
            <WizardSummary />
        </div>
    </div>
</template>

<style lang="css">
div.bucket {
    padding: 2rem;
    background: transparent;
    border: transparent solid thin
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: .5rem;
    padding: 2rem;
}

h1 {
    padding: .5rem;
    border: transparent solid thin;
    text-align: center;
}
h2 {
    letter-spacing: 7px;
}
button,
button[type=submit] {
    width: 270px;
    margin: auto;
    background-color: #48578B;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 1rem auto -1rem auto;
    cursor: pointer;
}
</style>