//router目录下的index.js
import { createRouter, createWebHashHistory, createWebHistory } from"vue-router"

const routes = [
  { 
      path:"/",
      redirect:"/login",//重定向，当使用  "/  ",重新使用  "/home  "
  },
  { 
      path:"/login", 
      name:'login',
      component:()=>import("@/pages/Login.vue") ,
  },
  {
      path:"/register",
      name:'register',
      component: ()=>import("@/pages/Register.vue")   
  },
  {
    path:"/home",
    redirect: '/home/index',
    component:()=>import("@/pages/Home.vue"),
    children: [
      { 
        path: "index", 
        name:'index',
        component: ()=>import("@/pages/Index.vue")},
      { path:"addopaque", name:'addopaque',component:()=>import("@/pages/AddOpaque.vue")},
      { path:"encodeliterals",name:'encodeliterals',  component: ()=>import("@/pages/EncodeArithmetic.vue") },
      { path:"flatten",name:'flatten',component:  ()=>import("@/pages/Flatten.vue")},
      { path:"our", name:'our', component:  ()=>import("@/pages/Our.vue")},
      { path:"history",  name:"history",component:()=>import("@/pages/History.vue") },
      { path:"editorcode",  name:"editorcode",component:()=>import("@/pages/EditorCode.vue") },
    ]
  },
  {
    path:"/admin",
    redirect: '/admin/usermanagement',
    component:()=>import("@/pages/Admin.vue"),
    children:[
     {
      path:"usermanagement",
      name:"usermanagement",
      component:()=>import('@/pages/admin/UserManagement.vue')
     },
     {
      path:'filemanagement',
      name:'filemanagement',
      component:()=>import('@/pages/admin/FileManagement.vue')
     }
    ]
  },
   {
    path:'/personal',
    name:'personal',
    component:()=>import('@/pages/Personal.vue')
   },
   {
    path:'/404',
    name:'404',
    component:()=>import('@/pages/NotFound.vue')
   } 
]

const router = createRouter({
  // hash 或者 history 模式
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})
// // 全局路由守卫的方法跟vue-router3一样
// // 路由全局前置守卫
// router.beforeEach((to,from,next)=>{
//   console.log(  "路由全局前置守卫  ", to, from);
//   next()
// })
// // 路由全局后置守卫
// router.afterEach((to,from,next)=>{
//   console.log(  "路由全局后置守卫  ", to, from);
//   next()
// })

export default router
