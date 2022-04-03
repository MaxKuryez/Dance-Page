import './price_list.scss';

const PriceList = ({
  header,
  prices,
}) => {

  let priceArray = [];

  prices.list.forEach((item, index) => {
    let classNameItem = 'item-container index-' + (index % 2);
    priceArray.push( <div className={classNameItem}><div className='item-name'>{item.name}</div><div className='item-price'>{item.price}</div></div> );
  });

  return (
    <div className='price-list-container'>
      <div className='price-list-header'>
        {header}
      </div>
      {priceArray}
    </div>
  );
}

export default PriceList;
