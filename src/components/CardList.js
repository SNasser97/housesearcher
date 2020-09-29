import React from 'react';
import Card from './Card';

// {property} = props/property
const CardList = ({ property }) => {
	// const cardsArray = 
	return (
		<div className='card-container'>
			{
				property.map(house => {
					return (
						<Card 
							key={ house['id'] } 
							features={ house['house_features'] }  
							id={ house['id']}  
							name={ house['house_address'] }  
							area={ house['house_area'] }  
							postcode={ house['house_postcode'] }  
							type={ house['house_type'] }  
							desc={ house['house_desc'] }  
							price={ house['house_price'] }  
							image={ house['imageData'] }
						/>
					)
				})
			}
		</div>
	);
}

export default CardList;