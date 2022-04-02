import './tiles.scss'
import ModalImage from "react-modal-image";

const Tiles = ({
  tileImages,
  titleHeader,
}) => {

  let tilesArray = [];

  tileImages.forEach(tile => {
    tilesArray.push( <div className='img-container'><ModalImage
    small={tile}
    large={tile}
    hideDownload={true}
  /></div> );
  });

  return (
   <div className='tiles-container'>
    <div className='tiles-header'>
      <p>{titleHeader}</p>
    </div>
      {tilesArray}
   </div>
  );
}

export default Tiles;
