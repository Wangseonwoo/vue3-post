import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateViewVue from '@/views/posts/PostCreateView.vue';
import PostDetailViewVue from '@/views/posts/PostDetailView.vue';
import PostEditViewVue from '@/views/posts/PostEditView.vue';
import PostListViewVue from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

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
    component: PostListViewVue,
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
    props: true,
    // props: route => {
    //   return {
    //     id: parseInt(route.params.id),
    //   }
    // }
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditViewVue,
  },
  {
    path: '/nested',
    name: 'NestedView',
    component: NestedView,
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: NestedHomeView,
      },
      {
        path: 'one', // children 속성일 때 /를 붙이면 절대경로가 되기 때문에 안된다.
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: NotFoundView
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;