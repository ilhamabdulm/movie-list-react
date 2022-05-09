import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { BsChevronCompactDown } from 'react-icons/bs';

import styles from './styles.module.less';

const LayoutHeader = (props) => {
  return (
    <Header className={styles.layout_header}>
      <Menu
        theme="light"
        mode="horizontal"
        className={styles.layout_header__menu}
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key={'1'}>Menu 1</Menu.Item>
        <Menu.Item key={'2'}>Menu 2</Menu.Item>
      </Menu>
      <div className={styles.layout_header__profile}>
        <p>Tahun Ajaran 2021/2022</p>
        <div>
          <BsChevronCompactDown width={40} height={40} />
        </div>
      </div>
    </Header>
  );
};

export default LayoutHeader;
