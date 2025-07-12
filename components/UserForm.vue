<template>
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <form @submit.prevent="handleSubmit" class="user-form">
          <h3>{{ isEdit ? 'Edit User' : 'Add User' }}</h3>
  
          <div>
            <label>Name</label>
            <input v-model="form.name" required />
          </div>
          <div>
            <label>Email</label>
            <input v-model="form.email" required type="email" />
          </div>
          <div>
            <label>Role</label>
            <select v-model="form.role" class="select-input">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
  
          <div class="form-actions">
            <button type="submit">Save</button>
            <button type="button" @click="$emit('close')">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useUsersStore } from '@/stores/users'
  
  const props = defineProps({
    user: Object
  })
  const emit = defineEmits(['saved', 'close'])
  
  const form = ref({
    id: null,
    name: '',
    email: '',
    role: 'user'
  })
  
  const isEdit = computed(() => !!form.value.id)
  const usersStore = useUsersStore()
  
  watch(
    () => props.user,
    (val) => {
      form.value = val ? { ...val } : { id: null, name: '', email: '', role: 'user' }
    },
    { immediate: true }
  )
  
  const handleSubmit = () => {
    if (form.value.id) {
      usersStore.updateUser(form.value)
    } else {
      usersStore.addUser(form.value)
    }
    emit('saved')
    emit('close')
  }
  </script>
  