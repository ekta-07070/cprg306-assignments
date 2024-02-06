import React from 'react';

const Item = ({name, quantity, category}) => {
  return (
    <ul className='border p-2 m-4 bg-red-400 text-white'>
        <li className='text-xl '  >Name: {name}</li>
        <li className='text-sm ' >Buy {quantity} in {category}</li>
{/* {console.log("Hello World")} */}
    </ul>
  );
};

export default Item;
