export default defineNuxtRouteMiddleware((to, from) => {
  if (to.matched.length === 0) {
    const app = useNuxtApp()
    return navigateTo(app.$localePath('/'), { redirectCode: 301 });
  }
});
