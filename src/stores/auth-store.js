// stores
import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js';

export const useAuthStore = defineStore('auth-store', () => {  
   const user = ref(null);
   const userProfile = ref(null);
   const isLoggedIn = ref(false);

   // Initialize Supabase

   // Create a single Supabase client for interacting with your Database
   const supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
   );
   console.log('🍀', supabase)

   //listening for auth event
   supabase.auth.onAuthStateChange((event, session) => {
      console.log('✅', event, session);
      user.value = session ? session.user: null;
      isLoggedIn.value = user.value ? true : false;
   });

   /**
    * 
    * @param {*} param0 
    * @returns 
    */
   const login = async ({ email, password }) => {
      return supabase.auth.signInWithPassword({
         email,
         password
      })
   }
   const createAccount = async ({ email, password, firstname, lastname, birthdate }) => {
      return await supabase.auth.signUp({
         email,
         password,
         firstname,
         lastname,
         birthdate
      })
   }
   return { login, user, createAccount, userProfile, isLoggedIn}
})