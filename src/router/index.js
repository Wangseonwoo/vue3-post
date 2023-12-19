import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateViewVue from '@/views/posts/PostCreateView.vue';
import PostDetailViewVue from '@/views/posts/PostDetailView.vue';
import PostEditViewVue from '@/views/posts/PostEditView.vue';
import postListViewVue from '@/views/posts/postListView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: postListViewVue,
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateViewVue,
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailViewVue,
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditViewVue,
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;