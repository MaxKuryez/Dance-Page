import './carousele.scss'
import Slider from 'react-slick';

function CarouselBlock({
  catalogueImages,
  catalogueCopy,
}) {

  const settingsPC = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: 'slider-component',
  };

  const settingsMobile = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slider-component',
  };

  let catalogueArray = [];

  catalogueImages.forEach((image, index) => {
    console.log(index);
    catalogueArray.push(
      <div className='card-container'>
        <img className='d-block w-50 m-auto' src={image} alt='First slide'/>
          <h3>{catalogueCopy[index] && catalogueCopy[index].header ? catalogueCopy[index].header : ''}</h3>
          <p>{catalogueCopy[index] && catalogueCopy[index].copy ? catalogueCopy[index].copy : ''}</p>
      </div>
    );
  });

  return (
    <div className='carousele-container'>
      <div className='carousele-element mobile-hidden'>
        <Slider {...settingsPC}>
          {catalogueArray}
        </Slider>
      </div>
      <div className='carousele-element pc-hidden'>
      <Slider {...settingsMobile}>
        {catalogueArray}
      </Slider>
      </div>
    </div>
  );
}

export default CarouselBlock;
