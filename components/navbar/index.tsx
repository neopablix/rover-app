import React, { memo } from 'react';

import { Menu } from 'antd';

export interface INavbarProps {
  current: string;
  setCurrent: (name: string) => void;
}

const Navbar = memo(({ current, setCurrent }: INavbarProps) => {
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu mode='horizontal' onClick={handleClick} selectedKeys={[current]}>
      <Menu.Item key='curiosity'>Curiosity</Menu.Item>
      <Menu.Item key='opportunity'>Opportunity</Menu.Item>
      <Menu.Item key='spirit'>Spirit</Menu.Item>
    </Menu>
  );
});

export default Navbar;
