import App from './App.vue';
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import viewAbout from './views/viewAbout.vue'
import viewCalendar from'./views/viewCalendar.vue'
import viewConfig from './views/viewConfiguration.vue'
import viewDashboard from './views/viewDashboard.vue'
import viewTools from './views/viewTools.vue'
import viewMachine from './views/viewMachine.vue'
import viewMplan from './views/viewMplan.vue'
import viewTeam from './views/viewTeam.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { name: "Dashboard",      path: '/',                  component: viewDashboard,},
    { name: "Action",         path: '/viewCalendar',      component: viewCalendar,},
    { name: "machine",        path: '/viewMachine',   component: viewMachine,},
    { name: "Team",           path: '/viewTeam',      component: viewTeam,},
    { name: "Mplan",          path: '/viewMplan',     component: viewMplan,},
    { name: "tools",          path: '/viewTools',     component: viewTools,},
    { name: "confiuration",   path: '/viewConfig',    component: viewConfig,},
    { name: "about",          path: '/viewAbout',     component: viewAbout, },
  ]
});



Vue.config.productionTip = false;

new Vue({
  el: '#app',
  vuetify,
  render: (h) => h(App),
  router
})

