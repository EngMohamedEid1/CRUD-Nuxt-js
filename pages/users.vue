<template>
    <div class="users-page">
      <UsersTable @new="openAdd" @edit="openEdit" />

      <Transition name="modal-fade">
        <LazyUserForm
            v-if="showForm"
            :user="selectedUser"
            @saved="closeForm"
            @close="closeForm"
        />
       </Transition>
    </div>
  </template>
  
  <script setup>

   definePageMeta({
    middleware: 'auth'
   }) 
  const showForm = ref(false)
  const selectedUser = ref(null)
  
  const openAdd = () => {
    selectedUser.value = null
    showForm.value = true
  }
  

  const openEdit = (user) => {
    selectedUser.value = user
    showForm.value = true
  }
  
  const closeForm = () => {
    showForm.value = false
  }
  </script>
  