import { Routes, Route } from 'react-router-dom';

import { FormLayout, MainLayout, AuthLayout } from '@/components/layout';
import { DashboardKeseluruhanPage, SignInPage, MyProfilePage } from '@/pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<DashboardKeseluruhanPage />} />
      </Route>
      <Route path="/form" element={<FormLayout />}>
        <Route path="profile" element={<MyProfilePage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signin" element={<SignInPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
