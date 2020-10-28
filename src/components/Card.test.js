import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';

// dummy_data from api (obj data that includes 4 objects)
const features = {
  house_features: {
    bedrooms: 4,
    city_distance: .1,
    school_distance: .25,
    parking: 'residential',
  }
}

describe('<Card props={obj}...house_features={obj.obj.props} />', () => {
  const wrapper = shallow(<Card features={features.house_features} />);

  it('expect to render card', () => {
    expect(wrapper.length)
      .toEqual(1);
  });

  it('expect to contain description p element', () => {
    const wrapper = shallow(<Card features = {features.house_features}>
      <p className='house__description'></p>
    </Card>);
    expect(wrapper.contains(<p className='house__description'></p>
)).toEqual(true);
    console.log(wrapper.children());
  });
})
