/* eslint-disable jest/valid-expect */
// ##########  Everything needing import 🙂  ##########
import { should } from 'chai';
import { shallow } from 'enzyme';


// # Components
import Destination from 'src/components/Destination';
import __data from 'src/data';


// # Chai & enzyme tests
should();

describe('Destination component tests', () => {
    const wrapper = shallow(<Destination data={__data} />);

    it('should have a prop className', () => {
        wrapper.props().should.have.property('className');
    });

    it('should have a .destination className', () => {
        expect(wrapper.find('.destination')).to.have.lengthOf(1);
    })

    it('should not have prop id', () => {
        wrapper.props().should.not.have.property('id');
    });
});