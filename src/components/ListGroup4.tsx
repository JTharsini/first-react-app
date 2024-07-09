import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

// when an item is clicked, need to do something. for different part of pages might need to do
// different work. If we reload a part inside listener, then this component will become
// not re-usable by other components. To avoid that we need to pass the function
// inside the component
function ListGroup4({ items, heading, onSelectItem }: Props) {
  const message = items.length === 0 ? <p>No item found</p> : null;
  const handleClick = (event: MouseEvent, item: string, index: number) => {
    setSelectedIndex(index);
    onSelectItem(item);
  };
  const [selectedIndex, setSelectedIndex] = useState(-1);
  heading = "Meow"; // not good modifying input param (anti-pattern in functional programming principle: REACT)
  return (
    <>
      <h1>{heading}</h1>
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

export default ListGroup4;
