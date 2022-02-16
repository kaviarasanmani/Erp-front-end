import axios from "axios"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

axios.defaults.baseURL = "https://erp-dashboard.herokuapp.com"

createApp(App).use(store).use(router, axios).mount("#app")
