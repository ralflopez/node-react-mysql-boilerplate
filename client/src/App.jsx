import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const request = async () => {
      const response = await fetch("http://localhost:3000/");
      console.log(response);
      const result = await response.text();
      console.log(result);
      setMessage(result);
    };

    request();
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export default App;
