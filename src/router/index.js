import Vue from "vue";
import VueRouter from "vue-router";
import viewAbout from '../views/viewAbout.vue'
import viewAction from '../views/viewAction.vue'
import viewCalendar from'../views/viewCalendar.vue'
import viewConfig from '../views/viewConfiguration.vue'
import Dashboard from '../views/viewDashboard.vue'
import viewTools from '../views/viewTools.vue'


Vue.use(VueRouter)

const routes = [
    {
        Name: "viewDashboard",
        path: '/',
        component: Dashboard, 
    },
    {
        name:  "viewAction",
        path: '/viewAction',
        component: viewAction,
    },
    {
        name: "calendar",
        path: '/viewCalendar',
        component: viewCalendar,
    },
    {
        name: "about",
        path: '/viewAbout',
        component: viewAbout,
    },
    {
        name: "confiuration",
        path: '/viewConfig',
        component: viewConfig,
    },
    {
        name: "Ferramentas",
        path: '/viewTools',
        component: viewTools,
    }
]

const router = new VueRouter({ routes })

export default router