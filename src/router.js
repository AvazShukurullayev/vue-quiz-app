import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/all",
    alias: "/category",
    name: "category",
    component: () => import("./components/category/AllCategory.vue")
  },
  {
    path: "/:id",
    name: "category-details",
    component: () => import("./components/category/GetOneCategory.vue")
  },
  {
    path: "/create",
    name: "create",
    component: () => import("./components/category/AddCategory.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
