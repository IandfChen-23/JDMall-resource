import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import VueLazyLoad from "vue-lazyload"
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
    error: "..image/error.png", // 获取错误时显示的图片
    loading: require("../image/loading.png"), // 图片加载中显示的图片
})
/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
