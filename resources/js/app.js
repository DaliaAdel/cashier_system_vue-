import './bootstrap';
import 'bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';

import { createApp, h } from 'vue';
// import Login from'./dashboard/Auth/login.vue';
// import forget from './dashboard/Auth/forget.vue';
import router from './routes';
import dashApp from './dashboard/layout/dashApp.vue';
import layout from './dashboard/Auth/layout.vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
//     setup({ el, App, props, plugin }) {
//         return createApp({ render: () => h(App, props) })
//             .use(plugin)
//             .use(ZiggyVue)
//             .mount(el);
//     },
//     progress: {
//         color: '#4B5563',
//     },
// });

const app = createApp({});
// app.component('login-component', Login);
// app.component('forget-component', forget);
app.component('dashapp-component', dashApp);
app.component('layout-component', layout)
app.use(router);
app.mount("#app");
