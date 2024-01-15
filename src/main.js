import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router'
// import funcPlugins from './plugins/func';
// import objPlugins from './plugins/obj';
// import person from './plugins/person';
import globalComponents from './plugins/global-components';
// import focus from '@/directives/focus'; // Custom Directives 전역 선언 방식
import globalDirectives from './plugins/global-directives'; // plugin을 활용하여 다수의 Custom Directives 사용
import dayjs from '@/plugins/dayjs';
import { createPinia } from 'pinia';

const app = createApp(App);
// app.use(objPlugins, {name: '왕선우'});
// app.use(funcPlugins);
// app.use(person, {name: '홍길동'});
app.use(globalComponents);
app.use(globalDirectives);
app.use(dayjs);
app.use(router);
app.use(createPinia());
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';