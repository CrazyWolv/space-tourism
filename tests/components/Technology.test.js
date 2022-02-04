/* eslint-disable jest/valid-expect */
// ##########  Everything needing import 🙂  ##########
import { should } from 'chai';
import { shallow } from 'enzyme';


// # Components
import Technology from 'src/components/Technology';
import __data from 'src/data';


// # Chai & enzyme tests
should();

describe('Technology component tests', () => {
    const wrapper = shallow(<Technology data={__data} />);

    it('should have a prop className', () => {
        wrapper.props().should.have.property('className');
    });

    it('should have a .technology className', () => {
        expect(wrapper.find('.technology')).to.have.lengthOf(1);
    })

    it('should not have prop id', () => {
        wrapper.props().should.not.have.property('id');
    });
});