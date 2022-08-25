import logo from '../../assets/global/logo.jpg';
import burgerMenu from '../../assets/global/icons/burger_menu.png';
import './gnav_menu.scss';
import {contentGnav} from '../globals/content.js'

function Gnav() {
  return (
    <div className='gnav-container'>
      <div className='gnav-menu-row mobile-hidden'>
          <div className='logo-container'>
            <a href='/'>
              <img src={logo}></img>
            </a>
          </div>
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
      </div>
      <div className='gnav-mobile-row pc-hidden'>
        <div className='logo-container mobile'>
          <a href='/'>
            <img src={logo}></img>
          </a>
        </div>
        <div className='menu-link mobile'>
          <img src={burgerMenu}></img>
        </div>
      </div>
    </div>
  );
}

export default Gnav;
