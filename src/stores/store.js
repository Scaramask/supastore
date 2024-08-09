// stores
import {ref, reactive} from 'vue'
import { defineStore } from 'pinia'

export const useWizardStore = defineStore('wizard-store', () => {
 const step = ref(1);
 const accountInfos = reactive({
    firstName: '',
    lastName: '',
    eMail: '',
    passWord: '',
    birthDate: '',
    //avatar: '',
    //avatarUrl: ''
 });

 function nextStep(formData) {
    console.log('%c formData Object', "color:orange", formData)
    const store = useWizardStore();
    store.$patch({ 
        accountInfos: {
            ...formData,
        },
    });
    step.value++
 }
 function previousStep() {
    step.value--
 }
 return {
    step,
    nextStep,
    previousStep,
    accountInfos
 }
})