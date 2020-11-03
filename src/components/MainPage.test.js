import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MainPage from './MainPage';

// dummy_data from api (obj data that includes 4 objects)


//* snapshot test example
let wrapper;
beforeEach(() => {
  const mockProps = {
    onSearchChange: jest.fn(),
    onFetchHomes: jest.fn(),
    searchField: '',
    property: [],
    isPending: false,
    error: ''
  }
  wrapper = shallow(<MainPage {...mockProps} />);
});

describe('main component', () => {
  it('Renders the main page', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters houses correctly queried', () => {
    const mockProps2 = {
      onSearchChange: jest.fn(),
      onFetchHomes: jest.fn(),
      searchField: 'seMi',
      isPending: false,
      property: [
        {
          id: 3,
          house_type: 'Semi-detached',
          house_name: '70 Avenue',
          house_postcode: 'PDW B34',
        }
      ],
      error: ''
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterProperties()).toEqual([{
      id: 3,
      house_type: 'Semi-detached',
      house_name: '70 Avenue',
      house_postcode: 'PDW B34',
    }]);

  });
  it('filters houses correctly empty search', () => {
    expect(wrapper.instance().filterProperties()).toEqual([]);
  });

  it('filters houses correctly queried = no result', () => {
    const mockProps3 = {
      onSearchChange: jest.fn(),
      onFetchHomes: jest.fn(),
      searchField: 'Bungalow',
      isPending: false,
      property: [
        {
          id: 3,
          house_type: 'Semi-detached',
          house_name: '70 Avenue',
          house_postcode: 'PDW B34',
        }
      ],
      error: ''
    }
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filterProperties()).toEqual([]);

  });


  it('return loader when pending is true', () => {
    const mockProps4 = {
      onSearchChange: jest.fn(),
      onFetchHomes: jest.fn(),
      searchField: '',
      property: [],
      isPending: true,
      error: ''
    }
    const wrapper4 = shallow(<MainPage {...mockProps4} />);
    expect(wrapper4.find('[id="loader"]').exists()).toBeTruthy();
  })
});
// describe('<Card props={obj}...house_features={obj.obj.props} />', () => {
//   const wrapper = shallow(<Card features={features.house_features} />);

//   it('expect to render card', () => {
//     expect(wrapper.length)
//       .toEqual(1);
//   });

//   it('expect to contain description p element', () => {
//     const wrapper = shallow(<Card features = {features.house_features}>
//       <p class='house__description'></p>
//     </Card>);
//     expect(wrapper.contains(<p class='house__description'></p>
// )).toEqual(true);
//     console.log(wrapper.children());
//   });


// });

