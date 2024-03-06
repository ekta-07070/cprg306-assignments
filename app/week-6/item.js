const Item = ({ name, quantity, category }) => {
    return (
     <ul className="bg-violet-300 p-2 w-1/2 mt-7 mx-7">
      <li className="font-bold text-xl">
        Name: {name}
      </li>
      <li>
        buy {quantity} in the {category} category
      </li>
     </ul>
    );
  }
  
  export default Item;