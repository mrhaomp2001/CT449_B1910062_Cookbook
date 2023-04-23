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
        name: "recipe.add",
        component: RecipeAdd,
    },
    {
        path: "/recipe/:id",
        name: "recipe.edit",
        component: () => import("@/views/RecipeUpdate.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/ingredient",
        name: "ingredient",
        component: () => import("@/views/Ingredient.vue"),
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