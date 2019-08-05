import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Zhongchou from "../zhongchou/index.vue"
import Baitiao from "../baitiao/index.vue"
import My from "../my/index.vue"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name:'home',
            component: Home,
        },
        {
            path: "/money",
            name:'money',
            component: Money,
        },
        {
            path: "/zhongchou",
            component: Zhongchou,
        },
        {
            path: "/baitiao",
            component: Baitiao,
        },
        {
            path: "/my",
            component: My,
        },
    ],
})
