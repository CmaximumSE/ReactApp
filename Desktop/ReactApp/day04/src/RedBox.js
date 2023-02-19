import React from 'react';

export default function RedBox() {
  return (
    <div>
      <p>
        Hello,<span style={{color:'red'}}>RED BOX</span>
      </p>
    </div>
  );
}

export function BlueBox() {
    return (
      <div>
        <p>
          Hello,<span style={{color:'blue'}}>BLUE BOX</span>
        </p>
      </div>
    );
  }

  export function GreenBox() {
    return (
      <div>
        <p>
          Hello,<span style={{color:'green'}}>GREEN BOX</span>
        </p>
      </div>
    );
  }