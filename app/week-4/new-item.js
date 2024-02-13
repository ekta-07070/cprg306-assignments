"use client"
import React, { useState } from 'react';

const NewItem = () => {
 
  const [Name, Set_Name] = useState('');
  const [Quantity, Set_Quantity] = useState(1);
  const [Category, Set_Category] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { Name, Quantity, Category };
    console.log(item);
    alert(`Name: ${Name}\nQuantity: ${Quantity}\nCategory: ${Category}`);
   
    Set_Name('');
    Set_Quantity(1);
    Set_Category('produce');
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
  
      <label>
        Name:
        <input
          type="text"
          placeholder='Enter item name'
          value={Name}
          onChange={(e) => Set_Name(e.target.value)}
          required
        />
      </label>

      <label>
        Quantity:
        <input
          type="number"
          min="1"
          max="99"
          value={Quantity}
          onChange={(e) => Set_Quantity(Number(e.target.value))}
          required
        />
      </label>

      <label>
        Category:
        <select value={Category} onChange={(e) => Set_Category(e.target.value)}>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </label>


      <button type="submit">Submit</button>

      <style jsx>{`

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 300px;
            margin: 0 auto;
        }

        label {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            width: 100%;
        }

        input,
        select,
        button {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid grey;
            border-radius: 5px;
            color: grey;
        }

        button {
            background-color: pink;
            color: purple;
            cursor: pointer;
            width: 100%;
        }

        button:hover {
            background-color: blue;
        }
    `}
    </style>
        </form>
        </div>
    ); 
    }

    export default NewItem;
