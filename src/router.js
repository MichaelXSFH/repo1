import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Register from './components/Register'
import Login from './components/Login'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone';
import PersonName from './components/about/contact/PersonName';


Vue.use(VueRouter)

const routes=[
  {path:'/',name:"homeLink",components:{
    default:Home,
    'orderingGuide':OrderingGuide,
    'delivery':Delivery,
    'history':History
  }},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',name:'adminLink',component:Admin,
  //beforeEnter:(to,from,next) =>{
    //路由独享守卫
   // alert("非登录状态不能访问");
 //  }
},
  {path:'/about',component:About, redirect:'/history', children:[
    {path:'/about/contact',name:"contactLink", redirect:'/personname',component:Contact,children:[
      {path:'/phone',name:"phoneNumber",component:Phone},
      {path:'/personname',name:"personName",component:PersonName}
    ]},
    {path:'/delivery',name:"deliveryLink",component:Delivery},
    {path:'/history',name:"historyLink",component:History},
    {path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide},
  ]},
  {path:'/login',name:"loginLink",component:Login},
  {path:'/register',name:"registerLink",component:Register},
  {path:'*',redirect:'/'}

]

const router=new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    //return {x:0 , y:100}
    //return {selector:'.btn'}

    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  }
})

export default router