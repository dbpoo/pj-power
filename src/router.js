import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import(/* webpackChunkName: "detail" */ "./views/Detail.vue")
    },
    {
      path: "/solutions",
      name: " ",
      component: () => import(/* webpackChunkName: "about" */ "./views/Solutions.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ],
  scrollBehavior: () => ({ y: 0 }),
});
