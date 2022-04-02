import './homepage.scss'
import Banner from '../homepage_banner/homepage_banner.js'
import BannerImg1 from '../../assets/homepage_banner1.jpg'
import BannerImg2 from '../../assets/homepage_banner2.jpg'

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
    </div>
  );
}

export default HomePage;
