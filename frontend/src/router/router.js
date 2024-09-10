import { createRouter, createWebHistory } from "vue-router";

//importa le views che vuoi utilizzare per ogni rotta
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

//definisci tutte le rotte dell'app
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

//crea il router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
