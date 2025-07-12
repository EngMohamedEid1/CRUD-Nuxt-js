import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
      { id: 2, name: 'Jane Smith1', email: 'jane@example.com', role: 'admin' },
      { id: 3, name: 'Jane Smith2', email: 'jane@example.com', role: 'admin' },
      { id: 4, name: 'Jane Smith3', email: 'jane@example.com', role: 'admin' },
      { id: 5, name: 'Jane Smith4', email: 'jane@example.com', role: 'admin' },
      { id: 6, name: 'Jane Smith5', email: 'jane@example.com', role: 'admin' },
      { id: 7, name: 'Jane Smith6', email: 'jane@example.com', role: 'admin' },
      { id: 8, name: 'Jane Smith7', email: 'jane@example.com', role: 'admin' },
      { id: 9, name: 'Jane Smith8', email: 'jane@example.com', role: 'admin' },
      { id: 10, name: 'Jane Smith9', email: 'jane@example.com', role: 'admin' },
      { id: 11, name: 'Jane Smith10', email: 'jane@example.com', role: 'admin' },
      { id: 12, name: 'Jane Smith11', email: 'jane@example.com', role: 'admin' },
      { id: 13, name: 'Jane Smith12', email: 'jane@example.com', role: 'admin' },
      { id: 14, name: 'Jane Smith13', email: 'jane@example.com', role: 'admin' },
      { id: 15, name: 'Jane Smith14', email: 'jane@example.com', role: 'admin' },
      { id: 16, name: 'Jane Smith15', email: 'jane@example.com', role: 'admin' },
      { id: 17, name: 'Jane Smith16', email: 'jane@example.com', role: 'admin' },
      { id: 18, name: 'Jane Smith17', email: 'jane@example.com', role: 'admin' },
      { id: 19, name: 'Jane Smith18', email: 'jane@example.com', role: 'admin' },
      { id: 20, name: 'Jane Smith19', email: 'jane@example.com', role: 'admin' },
      { id: 21, name: 'Jane Smith20', email: 'jane@example.com', role: 'admin' },
    ],
    nextId: 3
  }),
  actions: {
    addUser(user) {
      user.id = this.nextId++
      this.users.push(user)
    },
    deleteUser(id) {
      this.users = this.users.filter(u => u.id !== id)
    },
    updateUser(updatedUser) {
      const index = this.users.findIndex(u => u.id === updatedUser.id)
      if (index !== -1) {
        this.users[index] = updatedUser
      }
    }
  }
})
