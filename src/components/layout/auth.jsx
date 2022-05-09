import { Outlet } from 'react-router-dom';

import styles from './styles.module.less';

const AuthLayout = () => {
  return (
    <main className={styles.container}>
      <section className={styles.container_form}>
        <Outlet />
      </section>
    </main>
  );
};

export default AuthLayout;
