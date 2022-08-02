import './carousele.scss'
import Slider from 'react-slick';

function CarouselBlock({
  catalogueImages,
  catalogueCopy,
}) {

  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
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
      <Slider {...settings}>
        {catalogueArray}
      </Slider>
    </div>
  );
}

export default CarouselBlock;
