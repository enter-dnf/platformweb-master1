import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import ('common/Home')
const Test = () => import ('views/Test')
const Login = () => import('views/Login')
const Register = () => import('views/Register')
const DiDa = () => import('views/DiDa')

Vue.use(Router)

export default new Router({
  mode : "history",
  routes: [
    {
      // 缺省
      path: '',
      redirect: '/DiDa'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/DiDa',
      name: 'DiDa',
      component: DiDa
    }
  ]
})