import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router'
// import funcPlugins from './plugins/func';
// import objPlugins from './plugins/obj';
// import person from './plugins/person';
import globalComponents from './plugins/global-components';

const app = createApp(App);
// app.use(objPlugins, {name: '왕선우'});
// app.use(funcPlugins);
// app.use(person, {name: '홍길동'});
app.use(globalComponents);
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';