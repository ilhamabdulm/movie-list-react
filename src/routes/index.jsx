import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import routes from './config';

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        {routes.map((rt) => (
          <Route path={rt.path} element={<rt.layout />}>
            {rt.subroutes.map((srt) => (
              <Route path={srt.path} element={<srt.element />} />
            ))}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
