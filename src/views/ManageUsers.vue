<template>
  <div class="container mt-4">
    <h1 class="mb-4">Manage Users</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <span :class="user.status === 'Active' ? 'badge bg-success' : 'badge bg-secondary'">
              {{ user.status }}
            </span>
          </td>
          <td>{{ user.role }}</td>
          <td>
            <button class="btn btn-info btn-sm me-1" @click="viewUser(user)">View</button>
            <button class="btn btn-warning btn-sm me-1" @click="editUser(user)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useUserStore } from '@/store';

export default {
  name: 'ManageUsers',
  computed: {
    users() {
      return useUserStore().users;
    },
  },
  methods: {
    deleteUser(id) {
      if (confirm('Are you sure you want to delete this user?')) {
        const userStore = useUserStore();
        userStore.deleteUser(id);
      }
    },
    viewUser(user) {
      this.$router.push({ name: 'UserDetails', params: { id: user.id } });
    },
    editUser(user) {
      this.$router.push({ name: 'EditUser', params: { id: user.id } });
    },
  },
};
</script>
