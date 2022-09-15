import './not_found.scss';
import Banner from '../../components/homepage_banner/homepage_banner.js';
import BannerImg1 from '../../assets/global/logo_3.jpg';
import {notFound} from '../../components/globals/content.js';

function AboutUs() {
  return (
    <div className='not-found-container'>
      <div className='pc-not-found mobile-hidden'>
        <Banner
        banneraImage={BannerImg1}
        bannerType={'left'}
        bannerText={notFound.header}/>
      </div>
      <div className='mobile-not-found pc-hidden'>
        <Banner
        bannerType={'text'}
        bannerText={notFound.header}/>
      </div>
    </div>
  );
}

export default AboutUs;
