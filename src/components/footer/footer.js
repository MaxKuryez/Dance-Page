import './footer.scss';
import vkLogo from '../../assets/global/vk-logo.png';
import {contentHeader} from '../globals/content.js'

function Gnav() {

  return (
    <div className='footer-container'>
      <div className='footer-menu-row'>
        <div className='menu-link'>
          <span>{contentHeader.phone}</span>
        </div>
        <div className='menu-link'>
          <span>{contentHeader.email}</span>
        </div>
        <div className='menu-link'>
          <span><a href='/'>РУССКИЙ</a> / <a href='/'>ENGLISH</a></span>
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