/* eslint-disable jest/valid-expect */
// ##########  Everything needing import 🙂  ##########
import { should } from 'chai';
import { shallow } from 'enzyme';


// # Components & datas
import Crew from 'src/components/Crew';
import __data from 'src/data';


// # Chai & enzyme tests
should();

describe('Crew component tests', () => {
    const wrapper = shallow(<Crew data={__data} />);

    it('should have a prop className', () => {
        wrapper.props().should.have.property('className');
    });

    it('should have a .crew className', () => {
        expect(wrapper.find('.crew')).to.have.lengthOf(1);
    })

    it('should not have prop id', () => {
        wrapper.props().should.not.have.property('id');
    });
});