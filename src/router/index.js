import Vue from 'vue'
import VueRouter from 'vue-router'

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
function loadView(src, view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/${src}/${view}.vue`)
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    // redirect: '/',
    name: 'Home',
    component: loadView('views','Home')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: loadView('views','Skills')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadView('views','Contact')
  },
  {
    path: '/work',
    name: 'Work',
    component: loadView('views','Work')
  },
  {
    path: '/work/:slug',
    name: 'Post',
    component: loadView('views','Post'),
    children:[
        {
          path: '',
          name: 'PostContent',
          component: loadView('views','PostContent')
        },
        {
          path: ':slugSub',
          name: 'SubPost',
          component: loadView('views','SubPost')
        },
    ]
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
