import { useState } from 'react';
import { Menu, Layout } from 'antd';

import styles from './styles.module.less';

const { Sider } = Layout;

const LayoutSider = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      theme="light"
      className={styles.layout_sider}
      width="25rem"
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed((s) => !s)}
    >
      <Menu
        theme="light"
        mode="inline"
        className={styles.layout_sider__menu}
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key={'1'}>Menu 1</Menu.Item>
        <Menu.Item key={'2'}>Menu 2</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default LayoutSider;
