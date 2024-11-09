import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users')) || [],
  }),
  actions: {
    addUser(user) {
      this.users.push(user);
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    deleteUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    updateUser(updatedUser) {
      const index = this.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        this.users.splice(index, 1, updatedUser);
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    },
    loadUsers() {
      if (this.users.length === 0) {
        fetch('/users.json')
          .then((response) => response.json())
          .then((data) => {
            this.users = data;
            localStorage.setItem('users', JSON.stringify(data));
          });
      }
    },
  },
});
