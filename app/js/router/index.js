import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Zhongchou from "../zhongchou/index.vue"
import ShoppingCart from "../shoppingCart/index.vue"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money,
        },
        {
            path: "/zhongchou",
            name:"zhongchou",
            component: Zhongchou,
        },
        {
            path: "/shoppingCart",
            component: ShoppingCart,
        },
    ],
})
