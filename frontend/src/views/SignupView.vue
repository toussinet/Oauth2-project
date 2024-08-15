<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        class="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-20"
          src="../assets/Toussinet.png"
          alt="logo"
        />
        Welcome to Toussinet Hub
      </a>
      <div class="mb-3">
        Discuss and share  your thoughs
      </div>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Create an account
          </h1>
          <form @submit.prevent="onSubmit" class="space-y-4 md:space-y-6">
            <InputComponent  label="Your email" type="email" placeholder="name@company.com">
            </InputComponent>

            <InputComponent  label="Password" type="password" placeholder="••••••••">
            </InputComponent>
            <SubmitButton @click="store.login" label="Continue"></SubmitButton>
            <p class="text-center">
              Or
            </p>
           
            <p class="text-sm font-light text-center text-gray-500 dark:text-gray-400">
              Already a member?
              <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Login here</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { authStore } from '@/stores/auth'
import InputComponent from '@/components/InputComponent.vue'
import SubmitButton from '@/components/SubmitButton.vue';
const store = authStore()
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
