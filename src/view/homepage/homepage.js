import './homepage.scss';
import Banner from '../../components/homepage_banner/homepage_banner.js';
import Tiles from '../../components/tiles/tiles.js';
import PriceList from '../../components/price_list/price_list.js';
import Prices from '../../components/globals/hp_prices.json';
import BannerImg1 from '../../assets/homepage_banner_1.jpg';
import BannerImg2 from '../../assets/homepage_banner_2.jpg';
import {homepageContent} from '../../components/globals/content.js';

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => { images[index] = r(item); });
  return images;
}

const TileImages = importAll(require.context('../../assets/homepage_tiles', false, /\.(jpg|png|jpeg|svg)$/));

function HomePage() {
  return (
    <div className='homepage-container'>
      <div className='hp-banner first-banner'>
        <Banner
        banneraImage={BannerImg1}
        bannerType={'wide'}
        bannerText={homepageContent.topBanner}/>
      </div>
      <div className='hp-banner header'>
        <Banner
        bannerText={homepageContent.header}
        bannerType={'header'}/>
      </div>
      <div className='hp-banner second-banner'>
        <Banner
        banneraImage={BannerImg2}
        bannerText={homepageContent.banner1}
        bannerType={'left'}/>
      </div>
      <div className='hp-banner third-banner'>
        <Banner
        banneraImage={BannerImg2}
        bannerText={homepageContent.banner2}
        bannerType={'right'}/>
      </div>
      <div className='hp-tiles'>
        <Tiles
        tileImages={TileImages}
        titleHeader={homepageContent.header2}/>
        </div>
      <div className='hp-price-list'>
        <PriceList
        header={homepageContent.priceHeader}
        prices={Prices}/>
      </div>
    </div>
  );
}

export default HomePage;
