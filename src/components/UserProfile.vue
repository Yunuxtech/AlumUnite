<template>
    <div class="border rounded-lg p-4 shadow-lg bg-white">
      <img :src="user.photo" alt="User Photo" class="w-16 h-16 rounded-full mb-4" />
      <h3 class="text-xl font-semibold">{{ user.name }}</h3>
      <p class="text-gray-600">{{ user.email }}</p>
      <p class="text-sm text-gray-500">{{ user.role }}</p>
      <p :class="user.status === 'Active' ? 'text-green-500' : 'text-red-500'">{{ user.status }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    props: {
      user: Object,
    },
  };
  </script>
  