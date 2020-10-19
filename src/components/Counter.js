import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '200px' }}>
      <h1>Counter</h1>
      <div style={{ padding: '10px' }}>{count}</div>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>
        -
      </button>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>
        +
      </button>
    </div>
  );
};

export default Counter;
