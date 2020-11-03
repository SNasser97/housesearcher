import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import { create } from "react-test-renderer";
import Card from './Card';
import property from '../assets/property.json';

// dummy_data from api (obj data that includes 4 objects)
const {
  house_features,
  house_address,
  house_area,
  house_postcode,
  house_type,
  house_desc,
  house_price,
  imageData,
  id
} = property[0];

const card = shallow(<Card
  features={house_features}
  id={id}
  name={house_address}
  area={house_area}
  postcode={house_postcode}
  type={house_type}
  desc={house_desc}
  price={house_price}
  image={imageData}
/>);
//* snapshot test example
it('expect to render card component', () => {
  expect(card).toMatchSnapshot();
});

// describe('<Card props={obj}...house_features={obj.obj.props} />', () => {
//   const wrapper = shallow(<Card features={features.house_features} />);

//   it('expect to render card', () => {
//     expect(wrapper.length)
//       .toEqual(1);
//   });

//   it('expect to contain description p element', () => {
//     const wrapper = shallow(<Card features = {features.house_features}>
//       <p className='house__description'></p>
//     </Card>);
//     expect(wrapper.contains(<p className='house__description'></p>
// )).toEqual(true);
//     console.log(wrapper.children());
//   });


// });

