import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function SideBar(props) {
  return (
    <Menu {...props}>
      <a className='menu-item' href='/'>
        Home
      </a>

      <a className='menu-item' href='/burgers'>
        Burgers
      </a>

      <a className='menu-item' href='/pizzas'>
        Pizzas
      </a>

      <a className='menu-item' href='/desserts'>
        Desserts
      </a>
    </Menu>
  );
};

export default SideBar;