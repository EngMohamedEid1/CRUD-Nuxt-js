// stores/auth.js
import { defineStore } from 'pinia'
import { adminUser } from '@/utils/fakeUser'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    login(email, password) {
      if (email === adminUser.email && password === adminUser.password) {
        this.user = adminUser
        return true
      }
      return false
    },
    logout() {
      this.user = null
      navigateTo('/login')
    },
  },
})
