import Vue from "vue";
import VueRouter from "vue-router";
import viewAbout from '../views/viewAbout.vue'
import viewAction from '../views/viewAction.vue'
import viewCalendar from'../views/viewCalendar.vue'
import viewConfig from '../views/viewConfiguration.vue'
import viewDashboard from '../views/viewDashboard.vue'
import viewTools from '../views/viewTools.vue'
import viewMachine from '../views/viewMachine.vue'
import viewMplan from '../views/viewMplan.vue'
import viewTeam from '../views/viewTeam.vue'




Vue.use(VueRouter)

const routes = [
    {
        Name: "viewDashboard",
        path: '/',
        component: viewDashboard, 
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
        name: "machine",
        path: '/viewMachine',
        component:  viewMachine ,
    },
    {
        name: "Team",
        path: '/viewTeam',
        component: viewTeam,
    },
    {
        name: "Mplan",
        path: '/viewMplan',
        component: viewMplan ,
    },
    {
        name: "tools",
        path: '/viewTools',
        component: viewTools,
    },
    {
        name: "confiuration",
        path: '/viewConfig',
        component: viewConfig,
    },
    {
        name: "about",
        path: '/viewAbout',
        component: viewAbout,
    }
]

const router = new VueRouter({ routes })

export default router