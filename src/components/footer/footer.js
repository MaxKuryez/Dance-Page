import './footer.scss';
import vkLogo from '../../assets/global/vk-logo.png';

function Gnav() {

  return (
    <div className='footer-container'>
      <div className='footer-menu-row'>
        <div className='menu-link'>
          <span>Телефон: <a href='tel:+71235678'>+7 123 56 78</a></span>
        </div>
        <div className='menu-link'>
          <span>Почта: <a href='mailto:test@test.mail'>test@test.mail</a></span>
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