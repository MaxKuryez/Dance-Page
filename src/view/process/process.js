import './process.scss';
import Banner from '../../components/homepage_banner/homepage_banner.js';
import BannerStart from '../../assets/process/start.jpg';
import BannerCreation from '../../assets/process/creation.jpg';
import {processContent} from '../../components/globals/content.js';

function ProcessPage() {
  return (
    <div className='process-page-container'>
      <div className='hp-banner header'>
        <Banner
        bannerText={processContent.header}
        bannerType={'header'}/>
      </div>
      <div className='hp-banner first-banner'>
        <Banner
        banneraImage={BannerStart}
        bannerText={processContent.banner1}
        bannerType={'left'}/>
      </div>
      <div className='hp-banner second-banner'>
        <Banner
        banneraImage={BannerCreation}
        bannerText={processContent.banner2}
        bannerType={'right'}/>
      </div>
      <div className='hp-banner third-banner'>
        <Banner
        bannerText={processContent.banner3}
        bannerType={'text'}/>
      </div>
    </div>
  );
}

export default ProcessPage;
