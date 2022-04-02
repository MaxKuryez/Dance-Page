import './tiles.scss'
import tile1 from '../../assets/homepage_tiles/hp_tile_6.png'

const Tiles = ({
  tileImages,
  titleHeader,
}) => {

  let elementsArray = [];

  tileImages.forEach(element => {
    elementsArray.push( <div className='img-container'><img src={element}></img></div> );
  });

  return (
   <div className='tiles-container'>
    <div className='tiles-header'>
      <p>{titleHeader}</p>
    </div>
      {elementsArray}
   </div>
  );
}

export default Tiles;
