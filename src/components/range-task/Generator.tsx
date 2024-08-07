import React from 'react';
import { rGenerator } from '../../utils/range';

const Generator: React.FC = () => {
  const values = [...rGenerator(1, 10, 1)];

  return (
    <div className="text-center p-5 font-sans">
      <header className="bg-gray-800 p-4 text-white rounded-md">
        <h2 className="text-xl">Number Generator</h2>
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
};

export default Generator;
