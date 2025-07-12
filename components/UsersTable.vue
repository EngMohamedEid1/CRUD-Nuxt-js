<template>
    <div class="users-table">
      <div class="top-bar">
        <input v-model="search" placeholder="Search..." />
        <button @click="$emit('new')">+ Add User</button>
        <button @click="authStore.logout()">Logout</button>

      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button @click="$emit('edit', user)">Edit</button>
              <button class="del" @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Pagination Controls -->
      <div class="pagination">
        <button :disabled="currentPage === 1" @click="currentPage--">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="currentPage++">Next</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useUsersStore } from '@/stores/users'
  import { useAuthStore } from '@/stores/authData'
  
  const usersStore = useUsersStore()
  const authStore = useAuthStore()
  const search = ref('')
  
  // Pagination
  const currentPage = ref(1)
  const itemsPerPage = 5
  
  const filteredUsers = computed(() => {
    return usersStore.users.filter((user) =>
      user.name.toLowerCase().includes(search.value.toLowerCase()) ||
      user.email.toLowerCase().includes(search.value.toLowerCase())
    )
  })
  
  const totalPages = computed(() =>
    Math.ceil(filteredUsers.value.length / itemsPerPage)
  )
  
  const paginatedUsers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return filteredUsers.value.slice(start, start + itemsPerPage)
  })
  
  const deleteUser = (id) => {
    usersStore.deleteUser(id)
    if (paginatedUsers.value.length === 0 && currentPage.value > 1) {
      currentPage.value--
    }
  }
  </script>
  