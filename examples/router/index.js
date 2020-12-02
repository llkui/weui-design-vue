import Vue from 'vue'
import Router from 'vue-router'

import navConfig from './routerCon'
import formConfig from './routerForm'

Vue.use(Router)

const docsRoutefun = navConfig => {
  const route = []
  navConfig.forEach(item => {
    if (item.groups) {
      item.groups.forEach(group => {
        group.list.forEach(nav => {
          route.push({
            path: nav.path,
            name: nav.name,
            component: r =>
              require.ensure([], () => r(require(`@/docs${nav.path}.md`)))
          })
        })
      })
    } else {
      route.push({
        path: item.path,
        name: item.name,
        component: r =>
          require.ensure([], () => r(require(`@/docs${item.path}.md`)))
      })
    }
  })
  return route
}
const docsRoute = docsRoutefun(navConfig)
const formsRoute = docsRoutefun(formConfig)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: '/button'
  }, ...docsRoute, ...formsRoute]
})