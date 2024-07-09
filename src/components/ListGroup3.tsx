import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: String;
}

function ListGroup3({ items, heading }: Props) {
  const message = items.length === 0 ? <p>No item found</p> : null;
  const handleClick = (event: MouseEvent, item: String, index: number) => {
    setSelectedIndex(index);
  };
  const [selectedIndex, setSelectedIndex] = useState(-1);
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

export default ListGroup3;
