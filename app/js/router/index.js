import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Mall from "../mall/index.vue"
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
            path: "/mall",
            name: "Mall",
            component: Mall,
        },
        {
            path: "/shoppingCart",
            component: ShoppingCart,
        },
    ],
})
