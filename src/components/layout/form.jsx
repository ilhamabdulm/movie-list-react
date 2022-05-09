import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import LayoutHeader from './components/header';

const { Content } = Layout;

import styles from './styles.module.less';

const FormLayout = () => {
  return (
    <Layout>
      <LayoutHeader />
      <Layout className={styles.layout_form}>
        <Content className={styles.layout_form__content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default FormLayout;
