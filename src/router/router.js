import Vue from "vue";
import Router from 'vue-router'
import MainLayout from '@/layout/MainLayout'
import Login from '@/modules/login/routes'
import Dashboard from '@/modules/dashboard/routes'
import Friends from '@/modules/friends/routes'
import User from '@/modules/user/routes'
import Files from '@/modules/files/routes'
import Register from '@/modules/register/routes'
import config from '@/http/httpConfig'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        ...Login,
        ...Register,
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Main',
            component: MainLayout,
            children: [
                ...Dashboard,
                ...Friends,
                ...User,
                ...Files,
            ]
        },
        {
            path: '/*',
            redirect: '/',
        }
    ],

});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const token = config.getCsrftoken();

    if (authRequired && token == '') {
      console.log('token',token);
        return next('/login');
    }

    // if(to.meta.adminAuth && localStorage.role !== "ROLE_ADMIN") {
    //     return next('/dashboard')
    // }

    next();
});

export default router;
