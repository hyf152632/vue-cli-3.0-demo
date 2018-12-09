import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
console.log(process.env, 'process env in router')

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { title: '首页' },
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About.vue'),
            meta: { title: '关于' },
        },
    ],
})

router.beforeEach((to, from, next) => {
    let title = to.meta && to.meta.title

    if (title) {
        document.title = title // 设置页面 title
    }

    // if (to.name === "home") {
    // 拦截并跳转至 page2 单页，$openRouter 方法在第 5 节中封装
    //   Vue.$openRouter({
    //     name: "page2"
    //   });
    // }

    next()
})

export default router
