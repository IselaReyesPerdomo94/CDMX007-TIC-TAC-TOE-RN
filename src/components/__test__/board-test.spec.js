import React from 'react';
import Board from '../Board/index';
import SquareBox from 'components/SquareBox/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
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
describe('Testing props', ()=>{
  it('The prop TURN should be true', ()=>{
    const wrapper = mount(<Board turn={true} />)
    expect(wrapper.props().turn).toBeTruthy()
  })
  it('The prop TURN should be false', ()=>{
    const wrapper = mount(<Board turn={false} />)
    console.log(wrapper)
    expect(wrapper.props().turn).toBeFalsy()
  })
  it('The prop ChangeTurn should be a func', ()=>{
    const changeTurn = () => {
      this.setState(prevState => ({
        playerx: !prevState.playerx
      }))
    }
    const wrapper = mount(<Board changeTurn={changeTurn} />)
    expect(typeof wrapper.props().changeTurn === 'function').toBeTruthy()
  })
})

//testing state
describe('Testing states in Board', ( )=> {
  it('The state of value should be an array of null',  () => {
    const wrapper = mount(<Board />)
    expect(wrapper.state().value).toEqual([null, null, null, null, null, null, null, null, null])
  })
  it('the state of alert should be an empty string', ()=> {
    const wrapper = mount(<Board />)
    expect(wrapper.state().alert).toBe('')
  })
})
//testing events
// describe('Testing events in Board', () => {
//   it('')
//   it()
// })
