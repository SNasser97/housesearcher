import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CounterButton from './CounterButton';

// dummy_data from api (obj data that includes 4 objects)
const mockColour = 'red';
const wrapper = shallow(<CounterButton colour={mockColour} />);

//* snapshot test example
describe('Counter component', () => {
  it('expect to render counter', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('increment counter correctly', () => {
    // simulate a click of the counter
    wrapper.find('[test="ctr-button"]').simulate('click');
    wrapper.find('[test="ctr-button"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
    expect(wrapper.props().colour).toEqual('red');
  });
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

