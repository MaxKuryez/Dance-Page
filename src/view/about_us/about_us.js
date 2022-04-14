import './about_us.scss';
import Banner from '../../components/homepage_banner/homepage_banner.js';
import BannerImg1 from '../../assets/about_us_1.jpg';
import BannerImg2 from '../../assets/about_us_2.jpg';
import BannerImg3 from '../../assets/about_us_3.jpg';

function AboutUs() {
  return (
    <div className='about-us-container'>
      <div className='about-us-banner banner-1'>
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
      <div className='hp-banner banner-2'>
        <Banner
        banneraImage={BannerImg2}
        bannerText={['This is', <br/>, 'a test', <br/>, ' example.']}
        bannerType={'left'}/>
      </div>
      <div className='hp-banner banner-2'>
        <Banner
        banneraImage={BannerImg3}
        bannerText={['This is', <br/>, 'a test', <br/>, ' example.']}
        bannerType={'right'}/>
      </div>
    </div>
  );
}

export default AboutUs;
