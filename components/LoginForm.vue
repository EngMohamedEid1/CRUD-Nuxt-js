<template>
    <form @submit.prevent="loginAction" class="login-form">
      <div>
        <label>Email</label>
        <input v-model="email" type="email" placeholder="Enter your email" required />

      </div>
      <div>
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Enter your password" required />
      </div>
      <div v-if="error" class="error">{{ error }}</div>
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script setup>

  
  const email = ref('admin@example.com')
  const password = ref('password')
  const error = ref('')
  
  const auth = useAuthStore()
  const router = useRouter()
  
  const loginAction = () => {
    const accepted = auth.login(email.value, password.value)
    if (accepted) {
      router.push('/users')
    } else {
      error.value = 'Invalid email or password'
    }
  }
  </script>
  <style scoped>
  
</style>
  