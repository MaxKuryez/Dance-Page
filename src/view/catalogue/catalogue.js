import './catalogue.scss';
import Banner from '../../components/homepage_banner/homepage_banner.js';
import CarouselBlock from '../../components/carousele/carousele.js';
import {catalogueContent} from '../../components/globals/content.js';
import {importAll} from '../../components/globals/functions.js';

const pinkImages = importAll(require.context('../../assets/catalogue/pink', false, /\.(jpg|png|jpeg|svg)$/));

function Catalogue() {
  return (
    <div className='catalogue-container'>
      <div className='hp-banner first-banner'>
        <Banner
        bannerType={'header'}
        bannerText={catalogueContent.header}/>
      </div>
      <div className='carousele-1'>
        <CarouselBlock
        catalogueImages={pinkImages}
        catalogueCopy={catalogueContent.firstCarousele}/>
      </div>
    </div>
  );
}

export default Catalogue;
