import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from '../src/components/game.js';
import GuessCount from '../src/components/guess-count.js'
import GuessForm from '../src/components/guess-form.js'
import GuessList from '../src/components/guess-list.js'
import GuessSection from '../src/components/guess-section'
import Header from '../src/components/header.js'
import InfoModal from '../src/components/info-modal.js'
import TopNav from '../src/components/top-nav.js'

it('Renders without crashing', () => {
  shallow(<Game />);
});

it('Renders without crashing', () => {
  shallow(<GuessCount />);
});

it('Renders without crashing', () => {
  shallow(<GuessForm />);
});

it('Renders without crashing', () => {
  shallow(<GuessList />);
});

it('Renders without crashing', () => {
  shallow(<GuessSection />);
});

it('Renders without crashing', () => {
  shallow(<Header />);
});

it('Renders without crashing', () => {
  shallow(<InfoModal />);
});

it('Renders without crashing', () => {
  shallow(<TopNav />);
});

//does component reflect props and state

it('should check state for correct values', () => {
  const wrapper = shallow(<Game />);
  expect(wrapper.state('guesses')).toEqual([]);
  expect(wrapper.state('feedback')).toEqual('Make your guess!');

});

//are callbacks fired for this component/is everything updated correctly?

it('Should fire the onGuess callback on submit', () => {
  const callback = jest.fn();
  const wrapper = mount(<GuessForm onGuess={callback} />);
  const value = '1';
  wrapper.find('.text').node.value = value;
  wrapper.simulate('submit');
  expect(callback).toHaveBeenCalledWith(value);
});
