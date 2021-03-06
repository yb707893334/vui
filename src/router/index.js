/*
*  路由配置
*  path : 路径
*  component : 引入组件
*  name : 路由名称
*  meta : 路由参数
*/ 

// 总路由 模块路由
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var routes=[
	{ 
      path: '/',
      component: resolve => require(['../demo/demo.vue'], resolve), 
      name: 'demo',
      meta:{title:"VUI"}
    },
    { 
      path: '/demo/swiper', 
      component: resolve => require(['../demo/swiper.vue'], resolve), 
      name: 'swiper',
      meta:{title:"swiper"}
    },
    { 
      path: '/demo/dialog', 
      component: resolve => require(['../demo/dialog.vue'], resolve), 
      name: 'dialog',
      meta:{title:"dialog"}
    },
    { 
      path: '/demo/addressPicker', 
      component: resolve => require(['../demo/addressPicker.vue'], resolve), 
      name: 'addressPicker',
      meta:{title:"addressPicker"}
    },
    { 
      path: '/demo/datetime', 
      component: resolve => require(['../demo/datetime.vue'], resolve), 
      name: 'datetime',
      meta:{title:"datetime"}
    },
    { 
      path: '/demo/countup', 
      component: resolve => require(['../demo/countup.vue'], resolve), 
      name: 'countup',
      meta:{title:"countup"}
    },
    { 
      path: '/demo/selectPicker', 
      component: resolve => require(['../demo/selectPicker.vue'], resolve), 
      name: 'selectPicker',
      meta:{title:"selectPicker"}
    },
    { 
      path: '/demo/switch', 
      component: resolve => require(['../demo/switch.vue'], resolve), 
      name: 'switch',
      meta:{title:"switch"}
    }
];

routes=routes;

export default new VueRouter({
  routes: routes,
  scrollBehavior: (to, from, savedPosition) => ({ x: 0, y: 0 })
})
