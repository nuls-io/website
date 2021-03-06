import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [
    { path: '*',component: resolve => require(['@/pages/Home'], resolve)},
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/pages/Home'], resolve)
    },
    {
      path: '/developer',
      name: 'developer',
      component: resolve => require(['@/pages/Developer'], resolve),
    },
    {
      path: '/media',
      name: 'media',
      component: resolve => require(['@/pages/Media'], resolve),
    },
    {
      path: '/mediaDetails',
      name: 'mediaDetails',
      component: resolve => require(['@/pages/MediaDetails'], resolve),
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: resolve => require(['@/pages/Introduction'], resolve),
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: resolve => require(['@/pages/Downloads'], resolve),
    },
    {
      path: '/team',
      name: 'team',
      component: resolve => require(['@/pages/Team'], resolve),
    },
    {
      path: '/wallet',
      name: 'walletDownloads',
      component: resolve => require(['@/pages/WalletDownloads'], resolve),
    },
    {
      path: '/whiteYellow',
      name: 'whiteYellow',
      component: resolve => require(['@/pages/WhiteYellow'], resolve),
    },
    {
      path: '/partners',
      name: 'partners',
      component: resolve => require(['@/pages/Partners'], resolve),
    },
    {
      path: '/joinNuls',
      name: 'joinNuls',
      component: resolve => require(['@/pages/JoinNuls'], resolve),
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: resolve => require(['@/pages/Qaqs'], resolve),
    },
    {
      path: '/commnunity',
      name: 'commnunity',
      component: resolve => require(['@/pages/Commnunity'], resolve),
    },
  ]
})
