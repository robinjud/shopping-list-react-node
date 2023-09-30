import React, { useState } from "react";
import ShoppingForm from "../ShoppingForm/ShoppingForm";

function ShoppingItem(props) {
  const [isEditable, setEditable] = useState(false);

  function deleteClicked() {
    props.deleteItem(props.id);
  }

  function updateClicked() {
    setEditable((oldValue) => !oldValue);
  }

  function itemUpdateDone(id, item, quantity) {
    setEditable(false);
    props.updateItem(id, item, quantity);
  }

  let content = (
    <>
      {" "}
      {props.item} ({props.quantity}){" "}
    </>
  );
  if (isEditable) {
    content = (
      <ShoppingForm
        mode="Update"
        updatedId={props.id}
        itemDefault={props.item}
        quantityDefault={props.quantity}
        updateItem={itemUpdateDone}
      />
    );
  }

  return (
  
    <li className="list">
    
      {content}
    
        <button className="delete-button" onClick={deleteClicked}>
          DELETE
        </button>
        <button className="edit-button" onClick={updateClicked}>
          {isEditable ? "CANCEL" : "EDIT"}
        </button>
       
    </li>

  );
}

export default function ShoppingList({ shoppingList, deleteItem, updateItem }) {
  const itemsJsx = shoppingList.map((listItem) => (
    <ShoppingItem
      key={listItem.id}
      id={listItem.id}
      item={listItem.item}
      quantity={listItem.quantity}
      deleteItem={deleteItem}
      updateItem={updateItem}
    />
  ));

  return <ul>{itemsJsx}</ul>;
}

