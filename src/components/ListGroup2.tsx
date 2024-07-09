import { MouseEvent, useState } from "react";

function ListGroup2() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //items = [];
  const message = items.length === 0 ? <p>No item found</p> : null;
  const handleClick = (event: MouseEvent, item: String, index: number) => {
    console.log("clicked " + item + "available on " + index + ": ", event);
    setSelectedIndex(index);
  };
  // This is called hook. A hook is the function that allows us to tab a built-in feature in react
  // useState is a state hook. There are other hooks as well.
  //const arr = useState(-1);
  //arr[0] = // variable (selected index)
  //arr[1] = // updater function
  // when variable is getting updated by updater function, react will notify the value is changed
  // as the component is changed. Then component will be re-rendered by react.
  // array destructuring makes it like follows:
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // or else const [name, setName] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => handleClick(event, item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup2;
