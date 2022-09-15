import './footer.scss';
import vkLogo from '../../assets/global/vk-logo.png';
import {contentFooter} from '../globals/content.js';
import Cookies from 'universal-cookie';

function Gnav() {

  function handleLanguageSwitch(e, lang) {
    e.preventDefault();
    console.log(lang);
    const cookies = new Cookies();
    let currentCookie = cookies.get('Lang');

    if (currentCookie != lang) {
      cookies.set('Lang', lang, { path: '/' });
      window.location.reload(false);
    }
    console.log('Current cookie: ' + cookies.get('Lang'));
  }

  return (
    <div className='footer-container'>
      <div className='footer-menu-row mobile-hidden'>
        <div className='menu-link'>
          <span>{contentFooter.phone}</span>
        </div>
        <div className='menu-link'>
          <span>{contentFooter.email}</span>
        </div>
        <div className='menu-link language'>
          <span><a onClick={(e) => {handleLanguageSwitch(e, 'ru')}}>РУССКИЙ</a> / <a onClick={(e) => {handleLanguageSwitch(e, 'en')}}>ENGLISH</a></span>
        </div>
        <div className='logo-container'>
          <a href='https://vk.com/yuliyakuryezstudio' target='blank'>
            <img src={vkLogo}></img>
          </a>
        </div>
      </div>
      <div className='footer-mobile-row pc-hidden'>
        <div className='menu-link'>
          <span>{contentFooter.phone}</span>
        </div>
        <div className='menu-link'>
          <span>{contentFooter.email}</span>
        </div>
        <div className='menu-link language'>
          <span><a onClick={(e) => {handleLanguageSwitch(e, 'ru')}}>РУССКИЙ</a> / <a onClick={(e) => {handleLanguageSwitch(e, 'en')}}>ENGLISH</a></span>
        </div>
        <div className='logo-container'>
          <a href='https://vk.com/yuliyakuryezstudio' target='blank'>
            <img src={vkLogo}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gnav;