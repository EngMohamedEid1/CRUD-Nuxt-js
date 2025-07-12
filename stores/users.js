import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [
      { id: 1, name: 'Ahmed Farid', email: 'ahmed.farid@example.com', role: 'user' },
      { id: 2, name: 'Sara Adel', email: 'sara.adel@example.com', role: 'admin' },
      { id: 3, name: 'Mohamed Eid', email: 'mohamed.eid@example.com', role: 'admin' },
      { id: 4, name: 'Nour ElDin', email: 'nour.eldin@example.com', role: 'user' },
      { id: 5, name: 'Lina Kamal', email: 'lina.kamal@example.com', role: 'user' },
      { id: 6, name: 'Omar Salah', email: 'omar.salah@example.com', role: 'admin' },
      { id: 7, name: 'Yasmine Tarek', email: 'yasmine.tarek@example.com', role: 'user' },
      { id: 8, name: 'Ali Hassan', email: 'ali.hassan@example.com', role: 'admin' },
      { id: 9, name: 'Mona Nabil', email: 'mona.nabil@example.com', role: 'user' },
      { id: 10, name: 'Tarek Hany', email: 'tarek.hany@example.com', role: 'admin' },
      { id: 11, name: 'Heba Zaki', email: 'heba.zaki@example.com', role: 'admin' },
      { id: 12, name: 'Khaled Mostafa', email: 'khaled.mostafa@example.com', role: 'user' },
      { id: 13, name: 'Rania Fathy', email: 'rania.fathy@example.com', role: 'admin' },
      { id: 14, name: 'Ziad Amr', email: 'ziad.amr@example.com', role: 'user' },
      { id: 15, name: 'Hagar Ashraf', email: 'hagar.ashraf@example.com', role: 'user' },
      { id: 16, name: 'Mahmoud Helmy', email: 'mahmoud.helmy@example.com', role: 'admin' },
      { id: 17, name: 'Salma Ayman', email: 'salma.ayman@example.com', role: 'user' },
      { id: 18, name: 'Bassel Sameh', email: 'bassel.sameh@example.com', role: 'admin' },
      { id: 19, name: 'Nadine Osama', email: 'nadine.osama@example.com', role: 'user' },
      { id: 20, name: 'Walid Ehab', email: 'walid.ehab@example.com', role: 'admin' },
      { id: 21, name: 'Fatma Anwar', email: 'fatma.anwar@example.com', role: 'user' }
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
