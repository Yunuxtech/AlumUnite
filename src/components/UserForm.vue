<template>
    <form @submit.prevent="submitForm" class="p-4 border rounded shadow">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="name" type="text" class="form-control" id="name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Role</label>
        <select v-model="role" class="form-select" id="role">
          <option>User</option>
          <option>Admin</option>
          <option>Guest</option>
        </select>
      </div>
      <div class="mb-3 form-check">
        <input v-model="status" type="checkbox" class="form-check-input" id="status" />
        <label class="form-check-label" for="status">Active</label>
      </div>
      <div class="mb-3">
        <label for="photo" class="form-label">Profile Photo</label>
        <input
          type="file"
          @change="handleFileUpload"
          class="form-control"
          id="photo"
          accept="image/*"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <p v-if="message" class="alert alert-success mt-3">{{ message }}</p>
    </form>
  </template>
  
  <script>
  import { useUserStore } from '@/store';
  
  export default {
    name: 'UserForm',
    data() {
      return {
        name: '',
        email: '',
        role: 'User',
        status: true,
        photo: null,
        message: '',
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
          this.photo = file;
        } else {
          alert('Invalid file type. Please upload an image.');
        }
      },
      submitForm() {
        const userStore = useUserStore();
        const newUser = {
          name: this.name,
          email: this.email,
          role: this.role,
          status: this.status ? 'Active' : 'Inactive',
          photo: this.photo ? URL.createObjectURL(this.photo) : '',
        };
        userStore.addUser(newUser);
        this.message = 'User added successfully!';
      },
    },
  };
  </script>
  