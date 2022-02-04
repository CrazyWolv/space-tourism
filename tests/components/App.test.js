/* eslint-disable jest/valid-expect */
// ##########  Everything needing import 🙂  ##########
import { render, screen } from '@testing-library/react';
import { should } from 'chai';
import { shallow } from 'enzyme';


// # Components & data
import App from 'src/components/App';
import __datas from 'src/data';


// == Render test
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// # Chai & enzyme tests
should();

describe('App component tests', () => {
  const wrapper = shallow(<App />);
  it('contains an element with a .app class', () => {
    wrapper.props().should.have.property('className');
  });

  it('should have 1 router and 4 routes', () => {
    expect(wrapper.find('Routes')).toBe.equal(1);
    expect(wrapper.find('Route')).toBe.equal(4);
  })

  it('should have 5 components', () => {
    expect(wrapper.find('HeaderNav')).toBe.equal(1);
    expect(wrapper.find('Home')).toBe.equal(1);
    expect(wrapper.find('Destination')).toBe.equal(1);
    expect(wrapper.find('Crew')).toBe.equal(1);
    expect(wrapper.find('Technology')).toBe.equal(1);
  })

  it('should not have prop id', () => {
    wrapper.props().should.not.have.property('id');
  });
});