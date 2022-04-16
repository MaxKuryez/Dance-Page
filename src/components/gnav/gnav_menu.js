import logo from '../../assets/logo.png';
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
          <a href='/about-me'>Обо мне</a>
        </div>
        <div className='menu-link'>
          <a href='/catalogue'>Мои работы</a>
        </div>
        <div className='menu-link'>
          <a href='/textile'>Ткани</a>
        </div>
        <div className='location-link'>
          <a href='/process'>Процесс</a>
        </div>
      </div>
    </div>
  );
}

export default Gnav;
