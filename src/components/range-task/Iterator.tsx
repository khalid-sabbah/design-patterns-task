import React from 'react';
import { rIterator } from '../../utils/range';

const Iterator: React.FC = () => {
  const values = [...rIterator(1, 10, 1)];

  return (
    <div className="text-center p-5 font-sans">
      <header className="bg-gray-800 p-4 text-white rounded-md">
        <h2 className="text-xl">Number Iterator</h2>
      </header>

      <ul className="list-none p-0 mt-4">
        {values.map((value, index) => (
          <li
            key={index}
            className="bg-blue-500 my-2 py-2 rounded-md text-white"
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Iterator;
