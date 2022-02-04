/* eslint-disable jest/valid-expect */
// ##########  Everything needing import 🙂  ##########
import { should } from 'chai';
import { shallow } from 'enzyme';


// # Components
import Home from 'src/components/Home';


// # Chai & enzyme tests
should();

describe('Home component tests', () => {
    const wrapper = shallow(<Home />);

    it('should have a prop className', () => {
        wrapper.props().should.have.property('className');
    });

    it('should have a .homepage className', () => {
        expect(wrapper.find('.homepage')).to.have.lengthOf(1);
    })

    it('should not have prop id', () => {
        wrapper.props().should.not.have.property('id');
    });
});