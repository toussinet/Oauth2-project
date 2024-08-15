import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axiosClient from '../axios'

import axios from 'axios'

export const authStore = defineStore('auth', {
  state: () => ({
    user: {
      data: {},
      token: null
    },
    email: '',
    password: '',
    router: useRouter()
  }),

  actions: {
    login() {

      axios
        .post('login', {
          email: this.email,
          password: this.password
        })
        .then((res) => {
          this.user.token = res.data.token
          this.router.push({ path: '/' })
          console.log(this.user.token)
        })
        .catch((err) => console.log(err))
    }
  }
})
