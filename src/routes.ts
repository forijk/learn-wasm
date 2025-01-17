import { lazy } from 'react';
import { RouteOption } from './router/types';

const routes: RouteOption[] = [
  {
    title: 'chasm',
    path: '/rsw/chasm',
    component: lazy(() => import('./views/chasm')),
    exact: true,
    env: ['dev', 'build'],
  },
  {
    title: 'ffmpeg',
    path: '/ffmpeg',
    component: lazy(() => import('./views/ffmpeg')),
    exact: true,
    env: ['dev'],
  },
  {
    path: '/',
    component: lazy(() => import('./views/home')),
  },
];

export default routes;