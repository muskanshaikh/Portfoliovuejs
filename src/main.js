import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/Experience", component: Experience },
    { path: "/skills", component: Skills },
  ],
  mode: "hash",
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");