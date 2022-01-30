import { useState } from "react";
import "./App.css";
import dataList from "./groceryList.json";
import Item from "./Component/Items/Item";

function App() {
  const [list, setList] = useState(dataList);
  const [edit, setEdit] = useState(false);

  //functions

  //Remove Unhealthy Items
  const removeUnhealthy = () => {
    const copyList = list.filter((item) => item.calories <= 500);
    setList(copyList);
  };

  //Remove Items
  const removeItem = (id) => {
    console.log(id);
    const removedItem = list.filter((item) => item.id !== id);
    setList(removedItem);
  };

  const editFun = (id) => {
    // console.log(id)
    setEdit(true);
  }

  const onKeyHandle = (e,i) => {
    if(e.key === "Enter"){
      // console.log(i);
      const newEditList = [...list];
      // console.log(e.target.value);
      newEditList[i].name = e.target.value;
      setEdit(!edit);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ color: "gold", fontSize: "40px" }}>Grocery List</h2>
        <div className="list-display">
          {list.map((item, index) => {
            return (
              <Item
                name={item.name}
                calories={item.calories}
                id={item.id}
                key={item.id}
                remove={removeItem}
                editItem={editFun}
                edit={edit}
                onKeyPress={onKeyHandle}
                index={index}
                
              />
            );
          })}
        </div>
        <button onClick={removeUnhealthy} type="remove" className="remove-btn">
          Remove Unhealthy
        </button>
      </header>
    </div>
  );
}

export default App;
