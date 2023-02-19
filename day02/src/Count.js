import { useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <h2>Counter</h2>
      <p className='number'>{count}</p>
      <button onClick={() => {
        setCount(prev => prev+ 1);
        setCount(prev => prev+ 1);
        setCount(prev => prev+ 1);
        setCount(prev => prev+ 1);
        setCount(prev => prev+ 1);
      }}>Add++</button>
    </div>
  )
}
