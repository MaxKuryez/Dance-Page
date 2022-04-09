import './homepage.scss';
import Banner from '../../components/homepage_banner/homepage_banner.js';
import Tiles from '../../components/tiles/tiles.js';
import PriceList from '../../components/price_list/price_list.js';
import Prices from '../../components/data/prices.json';
import BannerImg1 from '../../assets/homepage_banner_1.jpg';
import BannerImg2 from '../../assets/homepage_banner_2.jpg';

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
        url={''}/>
      </div>
      <div className='hp-banner header'>
        <Banner
        bannerText={'The info you need to know.'}
        bannerType={'header'}/>
      </div>
      <div className='hp-banner second-banner'>
        <Banner
        banneraImage={BannerImg2}
        bannerText={['This is', <br/>, 'a test', <br/>, ' example.']}
        bannerType={'left'}
        url={''}/>
      </div>
      <div className='hp-banner third-banner'>
        <Banner
        banneraImage={BannerImg2}
        bannerText={'Hello, this is the second banner!'}
        bannerType={'right'}
        url={''}/>
      </div>
      <div className='hp-tiles'>
        <Tiles
        tileImages={TileImages}
        titleHeader={'Check out the collection!'}/>
        </div>
      <div className='hp-price-list'>
        <PriceList
        header={'Price list.'}
        prices={Prices}/>
      </div>
    </div>
  );
}

export default HomePage;
