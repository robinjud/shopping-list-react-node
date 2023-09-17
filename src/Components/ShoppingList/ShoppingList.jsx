import React from 'react'

function ShoppingItem(props) { 
    return <li>{ props.item} ({props.quantity}) <button>DELETE</button></li>; 
} 

export default function shoppingList({ shoppingList }) {
  const itemJsx = shoppingList.map(listItem => 
  <ShoppingItem
   key={listItem.id} 
   id={listItem.id} 
   item={listItem.item} 
   quantity={listItem.quantity}/>
  );

  return (
    <ul>{ itemJsx }</ul>

  )
}
