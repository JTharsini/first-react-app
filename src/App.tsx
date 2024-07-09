import { MouseEvent, useState } from "react";
import Button1 from "./components/Button1";
import Alert2 from "./components/Alert2";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert2 onClose={() => setAlertVisibility(false)}>Error</Alert2>
      )}
      <Button1 onClick={() => setAlertVisibility(true)}>Test</Button1>
    </div>
  );
}

export default App;
