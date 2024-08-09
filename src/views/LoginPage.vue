<script setup>
import { useWizardStore } from "../stores/store.js";
import { useAuthStore } from "../stores/auth-store.js";
//import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const store = useWizardStore();
const authStore = useAuthStore();

// This function is called when client is logged in
const doLogin = async (e) => {
  try {
    const { email, password } = e.target.elements;
    console.log("%c Inputs values ->", "color:orange", email.value, password.value);
    const { data, error } = await authStore.login({ email: email.value, password: password.value });
    if (error) throw error;
    console.log('💌', data.user.email);
    router.replace("/")
  } catch (error) {
    //console.log("ERROR: " + error.message);
    alert("ERROR: " + error.message);
  }
};
</script>

<template>
  <div class="align" id="wrapper">
    <div class="grid">
      <form @submit.prevent="doLogin">
        <h3>Login Page ( Step 1... )</h3>
        <div class="form__field">
          <label for="email">
            <svg class="icon">
              <use xlink:href="#icon-user"></use>
            </svg>
            &nbsp;&nbsp;
            <span class="hidden">Email</span>
            <input class="form__input" type="email" name="email" placeholder="Email..." />
          </label>
        </div>
        <div class="form__field">
          <label for="password">
            <svg class="icon">
              <use xlink:href="#icon-lock"></use>
            </svg>
            &nbsp;&nbsp;
            <span class="hidden">Password</span>
            <input class="form__input" type="password" name="password" placeholder="Password..." />
          </label>
        </div>
        <!--<button type="submit">Signin</button>
                <button @click="() => store.previousStep()">Previous</button>
                 @click="$event => store.nextStep()" -->
        <button type="submit">Login</button>
        <button type="button" @click="()=>router.push('/create-account')">Create account</button>
      </form>
    </div>
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" class="icons">
    <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
      <path
        d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />
    </symbol>
    <symbol id="icon-lock" viewBox="0 0 1792 1792">
      <path
        d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
    </symbol>
    <symbol id="icon-user" viewBox="0 0 1792 1792">
      <path
        d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" />
    </symbol>
    <symbol viewBox="0 0 24 24" id="line-md-calendar">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <rect width="16" height="16" x="4" y="4" stroke-dasharray="64" stroke-dashoffset="64" rx="1">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="64;0"></animate>
        </rect>
        <path stroke-dasharray="6" stroke-dashoffset="6" d="M7 4V2M17 4V2">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="6;0"></animate>
        </path>
        <path stroke-dasharray="12" stroke-dashoffset="12" d="M7 11H17">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"></animate>
        </path>
        <path stroke-dasharray="9" stroke-dashoffset="9" d="M7 15H14">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="9;0"></animate>
        </path>
      </g>
      <rect width="14" height="0" x="5" y="5" fill="currentColor">
        <animate fill="freeze" attributeName="height" begin="0.5s" dur="0.2s" values="0;3"></animate>
      </rect>
    </symbol>
  </svg>
</template>

<style lang="css" scoped>
::placeholder {
  color: rgb(114, 114, 114);
}

#wrapper {
  /*min-block-size: 100vh;*/
  border: transparent solid thin;
}

.align {
  display: grid;
  place-items: center;
}

/* helpers/hidden.css */
.hidden {
  border: red solid thin;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

/* helpers/icon.css */

.icon {
  block-size: 1em;
  display: inline-block;
  margin-right: -17px;
  fill: teal;
  inline-size: 2em;
  vertical-align: middle;

  padding: 1rem;
}

/* modules/form.css */

input {
  background-image: none;
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  transition: 0.3s;
}

input[type="submit"] {
  cursor: pointer;
}

.form {
  display: grid;
  gap: 0.875rem;
}

/*input[type="date"]*/
::-webkit-calendar-picker-indicator {
  margin: 0 5px;
  padding: 0.5rem;
  background-color: #48578b;
  border-radius: 50%;
}

button[type="submit"],
input[type="email"],
input[type="password"],
input[type="text"],
input[type="date"] {
  inline-size: 100%;
  text-align: center;
  letter-spacing: 2px;
  width: 200px;
  height: 100%;
  margin: auto;
  background-color: #b4b4b4;
  color: black;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.form__field {
  display: flex;
}

.form__input {
  flex: 1;
}

label {
  border: transparent solid thin;
  border-radius: 5px;
  background-color: #a5a5a5;
}

div.bucket {
  padding: 2rem;
  background: transparent;
  border: transparent solid thin;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  padding: 2rem;
}

h1 {
  padding: 0.5rem;
  border: transparent solid thin;
  text-align: center;
}

button,
button[type="submit"] {
  width: 270px;
  margin: auto;
  background-color: #48578b;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 1rem auto -1rem auto;
  cursor: pointer;
}
</style>
