import './bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';

import { createApp } from 'vue';
import router from './routes';
import dashApp from './dashboard/layout/dashApp.vue';
import layout from './dashboard/Auth/layout.vue';

const app = createApp({});
app.component('dashapp-component', dashApp);
app.component('layout-component', layout);
app.use(router);
app.mount("#app");
