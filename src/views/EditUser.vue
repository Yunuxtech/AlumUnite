<template>
  <div class="container mt-4">
    <h1>Edit User</h1>
    <form @submit.prevent="submitForm" class="p-4 border rounded shadow">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="user.name" type="text" class="form-control" id="name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="user.email" type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Role</label>
        <select v-model="user.role" class="form-select" id="role">
          <option>User</option>
          <option>Admin</option>
          <option>Guest</option>
        </select>
      </div>
      <div class="mb-3 form-check">
        <input v-model="user.status" type="checkbox" class="form-check-input" id="status" />
        <label class="form-check-label" for="status">Active</label>
      </div>
      <button type="submit" class="btn btn-success">Update User</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '@/store';

export default {
  name: 'EditUser',
  props: ['id'],
  data() {
    return {
      user: null,
    };
  },
  created() {
    const userStore = useUserStore();
    this.user = { ...userStore.users.find((u) => u.id === parseInt(this.id)) };
  },
  methods: {
    submitForm() {
      const userStore = useUserStore();
      userStore.updateUser(this.user);
      this.$router.push({ name: 'ManageUsers' });
    },
  },
};
</script>
