import './homepage_banner.scss'

const HomePageBanner = ({
  banneraImage,
  bannerText,
  bannerType,
  url,
}) => {

  if (bannerType === 'wide') {
    return (
      <div className='banner-container'>
        <div className='homepage-banner-wide mobile-hidden'>
          <a href={url}>
            <img src={banneraImage}></img>
            {bannerText ? (<><p className='banner-text'>{bannerText}</p></>) : (<></>)}
          </a>
        </div>
        <div className='mobile-banner-wide pc-hidden'>
          <a href={url}>
            <img src={banneraImage}></img>
            {bannerText ? (<><p className='banner-text'>{bannerText}</p></>) : (<></>)}
          </a>
        </div>
      </div>
    );
  }

  if (bannerType === 'right' || bannerType === 'left') {
    return (
      <div className='banner-container'>
        <div className='homepage-banner-half mobile-hidden'>
          <a href={url}>
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
        <div className='mobile-banner-half pc-hidden'>
          <a href={url}>
            <div className='homepage-banner-img'>
              <img src={banneraImage}></img>
            </div>
            <div className='homepage-banner-text'>
              <p className='banner-text'>{bannerText}</p>
            </div>
          </a>
        </div>
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
