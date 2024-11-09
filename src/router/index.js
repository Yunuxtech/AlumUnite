import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import AddUser from '@/views/AddUser.vue';
import ManageUsers from '@/views/ManageUsers.vue';
import UserDetails from '@/views/UserDetails.vue';
import EditUser from '@/views/EditUser.vue';

const routes = [
  { path: '/', name: 'Home', component: Dashboard },
  { path: '/add-user', name: 'AddUser', component: AddUser },
  { path: '/manage-users', name: 'ManageUsers', component: ManageUsers },
  { path: '/user/:id', name: 'UserDetails', component: UserDetails, props: true },
  { path: '/edit-user/:id', name: 'EditUser', component: EditUser, props: true },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


