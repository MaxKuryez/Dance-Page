import './homepage.scss';
import Banner from '../homepage_banner/homepage_banner.js';
import Tiles from '../tiles/tiles.js';
import PriceList from '../price_list/price_list.js';
import Prices from '../data/prices.json';
import BannerImg1 from '../../assets/homepage_banner_1.jpg';
import BannerImg2 from '../../assets/homepage_banner_2.jpg';

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => { images[index] = r(item); });
  return images;
}

const TileImages = importAll(require.context('../../assets/homepage_tiles', false, /\.(png|jpe?g|svg)$/));

function HomePage() {
  return (
    <div className='homepage-container'>
      <div className='hp-banner first-banner'>
        <Banner
        banneraImage={BannerImg1}
        bannerText={'Hello, this is the text on banner!'}
        bannerType={'wide'}
        url={'/a'}/>
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
        url={'/b'}/>
      </div>
      <div className='hp-banner third-banner'>
        <Banner
        banneraImage={BannerImg2}
        bannerText={'Hello, this is the second banner!'}
        bannerType={'right'}
        url={'/c'}/>
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
