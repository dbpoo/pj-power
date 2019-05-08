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
      path: "/list",
      name: "list",
      component: () =>
        import(/* webpackChunkName: "detail" */ "./views/List.vue")
    },
    {
      path: "/detail",
      name: "detail",
      component: () =>
        import(/* webpackChunkName: "detail" */ "./views/Detail.vue")
    },
    {
      path: "/solutions",
      name: "solutions",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Solutions.vue")
    },
    {
      path: "/download",
      name: "download",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Download.vue")
    },
    {
      path: "/school",
      name: "school",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/School.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ],
  scrollBehavior: () => ({ y: 0 })
});
