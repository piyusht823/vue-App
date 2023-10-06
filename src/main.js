import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'
import home from './view/home.vue'
import about from './view/about.vue'
import contact from './view/contact.vue'
import employee from './view/employee.vue'
import employeedetails from './view/employeedetails.vue'

const routes = [
    {path: '/', name: 'home', component: home},
    {path: '/about', name: 'about', component: about},
    {path: '/contact', name: 'contact', component: contact},
    {path: '/employee/', name: 'employee', component: employee},
    {
        path: '/employeedetails/:id/:firstName', 
        name: 'employeedetails', 
        props: true,
        component: employeedetails
    }
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
