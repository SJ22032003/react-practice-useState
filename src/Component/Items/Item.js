import React from "react";
import "./Item-component.css";
export default function Item(props) {
  return (
    <div>
      {props.edit === true ? (
        <input type="text" onKeyPress={(e) => props.onKeyPress(e,props.index)} defaultValue={props.name} />
      ) : (
        <h4 className="list" onDoubleClick={() => props.editItem(props.id)}>
          {props.name} with {props.calories} calories
        </h4>
      )}
      <button className="list-remove" onClick={() => props.remove(props.id)}>
        Remove
      </button>
    </div>
  );
}
