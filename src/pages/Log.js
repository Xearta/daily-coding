import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Log = () => {
  return (
    <div className='log-container'>
      <ul className='log-list'>
        <li className='log-list-item'>
          <Link to='/4'>Day 4 (10/22/2020) - Started Travel App</Link>
        </li>
        <li className='log-list-item'>
          <Link to='/3'>Day 3 (10/20/2020) - Idle Colors</Link>
        </li>
        <li className='log-list-item'>
          <Link to='/2'>Day 2 (10/19/2020) - Started Idle Colors</Link>
        </li>
        <li className='log-list-item'>
          <Link to='/1'>Day 1 (10/18/2020) - Simple Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Log;
