import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import UserPage from '@/pages/UserPage'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: MainPage },
  { path: "/posts", component: PostPage },
  { path: "/users", component: UserPage },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
