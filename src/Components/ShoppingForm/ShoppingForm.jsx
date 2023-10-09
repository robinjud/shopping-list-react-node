import React, { useState } from 'react'

export default function ShoppingForm({ addItem, mode, updatedId, itemDefault, quantityDefault, updateItem }) {

    const [item, setItem] = useState(itemDefault ?? '');
    const [num, setNum] = useState(quantityDefault ?? '');

 

    function handleSubmit(event) {
       event.preventDefault();
       if (mode === 'Add') {
        addItem(item, num);
        setItem('');
        setNum('');
       } else if (mode === 'Update'){
        updateItem(updatedId, item, num);
       }
    }

    function handleItemChange(event) {
        setItem(event.target.value);
    }

    function handleQuantityChange(event) {
        setNum(event.target.value);
    }

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}> 
    <label htmlFor="item"></label> 
    <input className="input-box" placeholder='Item'
        type="text"  
        id="item"  
        name="item"  
        value={item}  
        onChange={handleItemChange} 
        pattern='.*\S.*'
        maxLength={38}
        required /> 
    <label htmlFor="quantity"></label> 
    <input className="input-box" placeholder=' Quantity'
        type="number"  
        id="quantity"  
        name="quantity"  
        value={num}  
        minLength={32}
        onChange={handleQuantityChange} 
        required />
    <button className="add-button" type="submit">{ mode }</button> 
</form> 
  )
}
