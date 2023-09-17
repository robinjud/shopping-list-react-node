import React, {useState, useEffect} from 'react'; 
 
import ShoppingForm from "./Components/ShoppingForm/ShoppingForm";
import ShoppingList from "./Components/ShoppingList/ShoppingList";

import "./App.css"; 



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
      </header>
      <main>
        <ShoppingForm />
        <ShoppingList />
      </main>
    </div>
  );
}

export default App;
