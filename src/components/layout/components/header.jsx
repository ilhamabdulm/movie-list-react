import { Dropdown, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { BsChevronCompactDown } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './styles.module.less';

const LayoutHeader = (props) => {
  const menus = (
    <Menu
      className={styles.dropdown_menu}
      items={[
        { label: <Link to="/form/profile">Profil Saya</Link> },
        { label: 'Logout' },
      ]}
    ></Menu>
  );

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
        <Dropdown
          overlay={menus}
          placement={'bottomRight'}
          trigger={['click']}
          destroyPopupOnHide
          onVisibleChange={(v) => {
            console.log('VISIBLE', v);
          }}
        >
          <div onClick={(e) => e.preventDefault()}>
            <FaUserCircle width={60} height={60} />
            <BsChevronCompactDown width={40} height={40} />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default LayoutHeader;
