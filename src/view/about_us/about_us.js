import './about_us.scss';
import Banner from '../../components/homepage_banner/homepage_banner.js';
import BannerImg1 from '../../assets/about_us_1.jpg';

function AboutUs() {
  return (
    <div className='about-us-container'>
      <div className='about-us-banner first-banner'>
        <Banner
        banneraImage={BannerImg1}
        bannerType={'wide'}
        bannerText={'About'}/>
      </div>
      <div className='about-us-banner header'>
        <Banner
        bannerText={'Something else very important.'}
        bannerType={'header'}/>
      </div>
    </div>
  );
}

export default AboutUs;
