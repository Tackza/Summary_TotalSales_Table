import Vue from "vue";
import VueRouter from "vue-router";
import GroupDisplay from "../components/GroupDisplay";
import BestSellDisplay from "../components/BestSellDisplay";
import QuantityDisplay from "../components/QuantityDisplay";
import SummaryDisplay from "../components/SummaryDisplay";

Vue.use(VueRouter);

const routes = [
  {
    path: "/group",
    name: "group",
    component: GroupDisplay,
  },
  {
    path: "/bestsell",
    name: "bestsell",
    component: BestSellDisplay,
  },
  {
    path: "/quantity",
    name: "quantity",
    component: QuantityDisplay,
  },
  {
    path: "/summary",
    name: "summary",
    component: SummaryDisplay,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
