import ListGroup3 from "./components/ListGroup3";
import ListGroup4 from "./components/ListGroup4";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let heading = "Cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup3 items={items} heading={heading} />
      <ListGroup4
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
  //each component has its own state. No mess due to that
}

export default App;
