import React from 'react';
import Board from '../Board/index';
import SquareBox from 'components/SquareBox/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

//testing renders
describe('Board component test with Enzyme, only renders', () => {
    it('renders Board without crashing', () => {
       shallow(<Board />);
     });
    it('renders nine SquareBox', ()=>{
      const wrapper = mount(<Board/>)
      expect(wrapper.find(SquareBox)).toHaveLength(9);
    })
    it('renders one Icon', ()=>{
      const wrapper = mount(<Board/>)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
    })
 });

 //testing classes
 describe('Testing Board component with Enzyme, only classes', () => {
  it('renders one div with class board', ()=>{
    const wrapper = mount(<Board/>)
    expect(wrapper.find('div').hasClass('board')).toEqual(true)
  })
  it('renders one Icon with class title', ()=>{
    const wrapper = mount(<Board/>)
    expect(wrapper.find(FontAwesomeIcon).hasClass('title')).toEqual(true)
  })
  it('renders one span with class undo', ()=>{
    const wrapper = mount(<Board/>)
    expect(wrapper.find('span').hasClass('undo')).toEqual(true)
  })
});

//testing props

//testing state