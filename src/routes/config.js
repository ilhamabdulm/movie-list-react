import { lazy } from 'react';

import { MainLayout, FormLayout, AuthLayout } from '@/components';

const SignInPage = lazy(() => import('@/pages/auth/signin'));
const DashboardKeseluruhanPage = lazy(() =>
  import('@/pages/dashboard/keseluruhan')
);
const MyProfilePage = lazy(() => import('@/pages/profile/main'));

const routes = [
  {
    name: 'main',
    layout: MainLayout,
    path: '/',
    subroutes: [
      {
        path: 'dashboard',
        element: DashboardKeseluruhanPage,
        name: 'Dashboard Keseluruhan',
      },
    ],
  },
  {
    name: 'form',
    layout: FormLayout,
    path: '/',
    subroutes: [
      {
        path: 'profile',
        element: MyProfilePage,
        name: 'Profile',
      },
    ],
  },
  {
    name: 'auth',
    layout: AuthLayout,
    path: '/',
    subroutes: [
      {
        path: 'signin',
        element: SignInPage,
        name: 'Sign In',
      },
    ],
  },
];

export default routes;
