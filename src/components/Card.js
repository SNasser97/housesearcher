import React from 'react';


// props destructure {name,addres...} = props
const Card = ({features,id,name,area, postcode, type, desc, price, image}) => {

	return (
			<div className="card">
				<div className="card__house card__house--front">
					<div className="house__details">
					<img className="house__img" src={image} alt={`property-${id}, ${name}`}/>
						<h2 className="house__name">{name}</h2>
						<p className="house__address">{`${area}, ${postcode}`}</p>
						<p className="house__type">{type}</p>
						<p className="house__price">
							<span className="house__price--currency">£</span>
							{price}
						</p>
					</div>
					{/* Flip over and show these details */}
					<div className="card__house card__house--back">
						<div className="house__details">
							<p className="house__description">{desc}
							</p>
							<ul className="house__list">
								<li className="house__item house__item--emojiBed">{`${features["bedrooms"]} bedrooms`}</li>
								<li className="house__item house__item--emojiCity">{`${features["city_distance"]}mi from city center`}</li>
								<li className="house__item house__item--emojiSchool">{`${features["school_distance"]}mi from local school`}</li>
								<li className="house__item house__item--emojiParking">{`parking, ${features["parking"]}`}</li>
							</ul>
							<a className="btn btn__primary" href="#!" target="_blank">View</a>
						</div>

					</div>
				</div>
			</div>
	)
}
export default Card;