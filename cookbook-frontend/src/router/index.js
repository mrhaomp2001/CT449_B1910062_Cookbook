import { createWebHistory, createRouter } from "vue-router";
import Recipe from "@/views/Recipe.vue";
import RecipeAdd from "@/views/RecipeAdd.vue";
const routes = [
    {
        path: "/",
        name: "recipe",
        component: Recipe,
    }, 
    {
        path: "/recipe-add",
        name: "recipeadd",
        component: RecipeAdd,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;