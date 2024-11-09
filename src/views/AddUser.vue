<template>
    <div>
      <h1>Add User</h1>
      <UserForm />
    </div>
  </template>
  
  <script>
  import UserForm from '@/components/UserForm.vue';
  
  export default {
    name: 'AddUser',
    components: {
      UserForm,
    },
  };
  </script>
  