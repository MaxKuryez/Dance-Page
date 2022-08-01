import './carousele.scss'
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";

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
  };

  let catalogueArray = [];

  console.log(catalogueImages.length);

  catalogueImages.forEach((image, index) => {
    console.log(index);
    catalogueArray.push(
      <div className='test'>
        <img className='d-block w-50 m-auto' src={image} alt='First slide'/>
          <h5>First slide label {index}</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    );
  });

  return (
    <div className='carousele-container'>
      <Slider {...settings}>
          {catalogueArray}
        </Slider>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </div>
  );
}

export default CarouselBlock;
