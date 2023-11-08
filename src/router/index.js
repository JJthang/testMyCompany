import { createRouter, createWebHistory } from "vue-router";
import Add_Product from "../views/CRUD_Product/Add_Product.vue";
import List from "../views/CRUD_Product/List_Product.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Add_Product",
      component: Add_Product,
    },
    {
      path: "/List",
      name: "Add_List",
      component: List,
    },
  ],
});

export default router;
