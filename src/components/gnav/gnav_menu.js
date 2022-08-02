import logo from '../../assets/global/logo.jpg';
import './gnav_menu.scss';

function Gnav() {
  return (
    <div className='gnav-container'>
      <div className='gnav-menu-row'>
        <div className='logo-container'>
          <a href='/'>
             <img src={logo}></img>
          </a>
        </div>
        <div className='menu-link'>
          <a href='/about-me'>ОБО МНЕ</a>
        </div>
        <div className='menu-link'>
          <a href='/catalogue'>МОИ РАБОТЫ</a>
        </div>
        <div className='menu-link'>
          <a href='/process'>ПРОЦЕСС</a>
        </div>
        <div className='location-link'>
          <a href='/contact-me'>КОНТАКТ</a>
        </div>
      </div>
    </div>
  );
}

export default Gnav;
