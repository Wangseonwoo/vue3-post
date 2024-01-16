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
import MyPage from '@/views/MyPage.vue';

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
  {
    path: '/my', 
    name: 'MyPage',
    component: MyPage,
    beforeEnter: [removeQuertString],
    // beforeEnter: (to, from) => {
      // console.log('to', to);
      // console.log('from', from);
      // return false; 페이지 접근 권한 막기
      //   return {name: 'home'} ; 다른 페이지로 리디렉션
      // return '/posts' ; 위 처럼 객체 뿐만아니라 주소값이 들어갈 수 도 있다.
      // console.log(to.query);
      // if(Object.keys(to.query).length > 0) {
      //   return {path: to.path, query: {}}; // 쿼리 스트링 삭제 가능
      // }
    // }
  }
];

function removeQuertString(to) {
  if(Object.keys(to.query).length > 0) {
    return {path: to.path, query: {}}; // 쿼리 스트링 삭제 가능
  }
}

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

// 전역 네비게이션 가드
//router.beforeEach((to, from)=> {  // navigation Gaurd
  //console.log('to', to);
  //console.log('from', from);
  // if(to.name === 'MyPage') {
  //   return false; 페이지 접근 권한 막기
  //   return {name: 'home'} ; 다른 페이지로 리디렉션
  //   return '/posts' ; 위 처럼 객체 뿐만아니라 주소값이 들어갈 수 도 있다.
  // }
//})

export default router;