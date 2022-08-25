import './homepage_banner.scss'

const HomePageBanner = ({
  banneraImage,
  bannerText,
  bannerType,
  url,
}) => {

  if (bannerType === 'wide') {
    return (
      <div className='homepage-banner-wide'>
        <a href={url}>
          <img src={banneraImage}></img>
          {bannerText ? (<><p className='banner-text'>{bannerText}</p></>) : (<></>)}
        </a>
      </div>
    );
  }

  if (bannerType === 'right' || bannerType === 'left') {
    return (
      <div className='homepage-banner-half' style={{overflow: 'auto'}}>
        <a href={url} style={{'-webkit-user-drag': 'none'}}>
        {bannerType === 'left' ? (<>
          <div className='homepage-banner-img'>
            <img src={banneraImage}></img>
          </div>
          <div className='homepage-banner-text'>
            <p className='banner-text'>{bannerText}</p>
          </div>
        </>) : (<>
          <div className='homepage-banner-text'>
            <p className='banner-text'>{bannerText}</p>
          </div>
          <div className='homepage-banner-img'>
            <img src={banneraImage}></img>
          </div>
        </>)}
        </a>
      </div>
    );
  }

  if (bannerType === 'header') {
    return (
      <div className='banner-header'>
        <p>{bannerText}</p>
      </div>
    );
  }

  if (bannerType === 'text') {
    return (
      <div className='banner-text'>
        <p>{bannerText}</p>
      </div>
    );
  }

}

export default HomePageBanner;
