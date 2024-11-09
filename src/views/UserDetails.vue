<template>
  <div class="container mt-4">
    <h1>User Details</h1>
    <div v-if="user" class="card p-4">
      <img :src="user.photo" alt="Profile Photo" class="img-thumbnail w-25 mb-3" />
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Role:</strong> {{ user.role }}</p>
      <p>
        <strong>Status:</strong>
        <span :class="user.status === 'Active' ? 'badge bg-success' : 'badge bg-secondary'">
          {{ user.status }}
        </span>
      </p>
    </div>
    <button class="btn btn-primary mt-3" @click="$router.push('/manage-users')">Back to Manage Users</button>
  </div>
</template>

<script>
import { useUserStore } from '@/store';

export default {
  name: 'UserDetails',
  props: ['id'],
  computed: {
    user() {
      const userStore = useUserStore();
      return userStore.users.find((u) => u.id === parseInt(this.id));
    },
  },
};
</script>
