import React from 'react';
import { contentGnav } from '../globals/content.js'
import { slide as Menu } from 'react-burger-menu';

function SideBar(props) {
  return (
    <Menu {...props}>
      <div className='menu-link'>
        <a href='/about-me'>{contentGnav.aboutMe}</a>
      </div>
      <div className='menu-link'>
        <a href='/catalogue'>{contentGnav.catalogue}</a>
      </div>
      <div className='menu-link'>
        <a href='/process'>{contentGnav.process}</a>
      </div>
      <div className='contact-link'>
        <a href='/contact-me'>{contentGnav.contactMe}</a>
      </div>
      <br/>
      <div className='contact-link'>
        <a href={'tel:' + contentGnav.phone}>{contentGnav.phone}</a>
      </div>
      <div className='contact-link'>
        <a href={'mailto:' + contentGnav.email}>{contentGnav.email}</a>
      </div>
    </Menu>
  );
};

export default SideBar;
