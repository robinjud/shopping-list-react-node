import React, { useState, useEffect } from "react";

import ShoppingForm from "./Components/ShoppingForm/ShoppingForm";
import ShoppingList from "./Components/ShoppingList/ShoppingList";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const loadData = () => {
    fetch("https://45n94v-8080.csb.app/api/items")
      .then((x) => x.json())
      .then((response) => {
        setShoppingList(response);
      });
  };

  useEffect(loadData, []);

  function addItem(item, quantity) {
    fetch("https://45n94v-8080.csb.app/api/items/new", {
      method: "POST",
      body: JSON.stringify({
        item,
        quantity,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      mode: "cors",
    }).then(loadData);
  }

  function deleteItem(id) {
    fetch("https://45n94v-8080.csb.app/api/items/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },

      mode: "cors",
    }).then(loadData);
  }

  function updateItem(id, item, quantity) {
    // parallel proactive update on client side
    setShoppingList((oldShoppingList) => {
      let newShoppingList = structuredClone(oldShoppingList);
      return newShoppingList.map((value) => {
        if (value.id === id) {
          value.item = item;
          value.quantity = quantity;
        }
        return value;
      });
    });

    fetch("https://45n94v-8080.csb.app/api/items/" + id, {
      method: "PUT",
      body: JSON.stringify({
        item,
        quantity,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "cors",
    }).then(loadData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Purchase List App</h1>
      </header>
      <main>
        <ShoppingForm addItem={addItem} mode="Add" />
        <ShoppingList
          shoppingList={shoppingList}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
