import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import LayoutSider from './components/sider';
import LayoutHeader from './components/header';

const { Content } = Layout;

import styles from './styles.module.less';

const MainLayout = () => {
  return (
    <Layout>
      <LayoutHeader />
      <Layout className={styles.layout_wrapper}>
        <LayoutSider />
        <Content className={styles.layout_content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
