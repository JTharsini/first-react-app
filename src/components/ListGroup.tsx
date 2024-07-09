import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //items = [];
  const message = items.length === 0 ? <p>No item found</p> : null;
  // not work as expected, because selectedIndex is local to this component.
  // React does not know about this. Refer ListGroup2 for correct approach
  let selectedIndex = 0;
  // avoid returning null with and operator
  const message2 = items.length === 0 && <p>No item found</p>;
  const getMessage = () => (items.length === 0 ? <p>No item found</p> : null);
  // Event handler
  const handleClick = (event: MouseEvent, item: String, index: number) => {
    console.log("clicked " + item + "available on " + index + ": ", event);
    selectedIndex = index;
  };
  return (
    //<h1>List</h1> if we add this in addition to list-group, failed. returning multiple elements is not
    // allowed in React --React.createElement('h1')
    // instead we can wrap both inside div and return it as single element
    // having a div just for React is not needed. Then replace it with Fragment to show
    // it as single fragment <Fragment> import { Fragment } from "react";
    // No need to add <Fragment> as well. There is a shortcut for that
    // use <> to denote <Fragment> is there. No need import as well
    <>
      <h1>List</h1>
      {message}
      {message2}
      {getMessage()}
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

export default ListGroup;
