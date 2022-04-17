import './not_found.scss';
import Banner from '../../components/homepage_banner/homepage_banner.js';
import BannerImg1 from '../../assets/logo_3.jpg';
import {notFound} from '../../components/globals/content.js';

function AboutUs() {
  return (
    <div className='not-found-container'>
        <Banner
        banneraImage={BannerImg1}
        bannerType={'left'}
        bannerText={notFound.header}/>
    </div>
  );
}

export default AboutUs;
