import { useUserAuthStore } from '@/stores/userAuth.store';
import { createRouter, createWebHistory } from 'vue-router';
import { privateRoutes } from './privateRoutes';
import { publicRoutes } from './publicRoutes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...publicRoutes,
    ...privateRoutes,
  ]
})

router.beforeEach( async (to,from,next) => {
  const userAuthStore = useUserAuthStore();

  const auth = to.matched.some(record => record.meta.auth);

  if(auth && !userAuthStore.isAuth){
    try {
      const user = await userAuthStore.checkToken();
      userAuthStore.setUser(user);
      userAuthStore.setIsAuth(true);
      console.log('verificação realizada');  
      next();
    } catch (error) {
      userAuthStore.clear();
      next('authenticate');
    }
  }else{
    console.log('nao precisou verificar');
    next();
  }
})

export default router