import React from 'react';
import Counter from '../components/Counter';
import '../index.css';

const Day1 = () => {
  return (
    <div className='daily-page-container'>
      <div className='daily-page-header'>
        <ul className='daily-page-list'>
          <h2>Day 1: Created A Simple Counter</h2>
          <li>Created a Counter component in the components folder</li>
          <li>Did some inline styling to the elements</li>
          <li>
            Used the `useState` hook for `count` state that updates on change
          </li>
          <li>Created two buttons to increment and decrement the state</li>
        </ul>
      </div>
      <Counter />
    </div>
  );
};

export default Day1;
