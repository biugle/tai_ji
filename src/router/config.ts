/*
 * @Author: HxB
 * @Date: 2022-08-15 10:36:17
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-24 15:34:59
 * @Description: 路由配置文件
 * @FilePath: \react_micro_web\src\router\config.ts
 */
import { sleep } from 'js-xxx';
import { lazy } from 'react';
import { defaultModule, modulesRoute, modulesRouteName } from '@configuration/modules_router_config';
import modules from './modules_config';

const routes = [
  {
    path: '/',
    redirect: '/login',
    exact: true,
  },
  {
    path: '/home',
    exact: true,
    redirect: `/${modulesRoute}`,
  },
  {
    path: `/${modulesRoute}`,
    exact: false,
    name: modulesRouteName,
    roles: ['admin'],
    component: lazy(async () => import('@views/Home')),
    meta: {
      title: '首页',
    },
    defaultRoute: `/${modulesRoute}/${defaultModule}`,
    routes: [...modules],
  },
  {
    path: '/login',
    name: 'Login',
    component: lazy(() => import('@views/Login')),
    meta: {
      title: '登录页面',
    },
    exact: true,
  },
  {
    path: null,
    name: '404',
    component: lazy(async () => {
      await sleep(3500); // 模拟异步加载，展示加载动画。
      return import('@views/404');
    }),
    meta: {
      title: '404',
    },
    exact: true,
  },
];

export default routes;