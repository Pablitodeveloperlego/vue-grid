import Vue from "vue";
import VueRouter from "vue-router";
import NestedGrid from "@/components/NestedGrid.vue";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "nestedgrid",
      component: NestedGrid
    }
  ]
});
