/* eslint-disable jest/valid-expect */
// ##########  Everything needing import 🙂  ##########
import { should } from 'chai';
import { shallow } from 'enzyme';


// # Components
import HeaderNav from 'src/components/Header-Nav';


// # Chai & enzyme tests
should();

describe('Header-Nav component tests', () => {
    const wrapper = shallow(<HeaderNav />);

    it('should have a prop className', () => {
        wrapper.props().should.have.property('className');
    });

    it('should be in a header', () => {
        expect(wrapper.find('header')).to.have.lengthOf(1);
    })

    it('should have a .navigation--container className', () => {
        expect(wrapper.find('.navigation--container')).to.have.lengthOf(1);
    })

    it('should not have prop id', () => {
        wrapper.props().should.not.have.property('id');
    });
});