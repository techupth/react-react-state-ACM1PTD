import "./App.css";
import { useState } from "react";

function App() {
  const [greetings, setGreetings] = useState("Greeting Message");
  const handleThaiClick = () => setGreetings("สวัสดี!");
  const handleEnglishClick = () => setGreetings("Hi!");
  const handleChineseClick = () => setGreetings("你好!");
  return (
    <div className="App">
      <div className="greeting-container">{greetings}</div>
      <div className="buttons">
        <button onClick={handleThaiClick}>สวัสดี!</button>
        <button onClick={handleEnglishClick}>Hi!</button>
        <button onClick={handleChineseClick}>你好!</button>
      </div>
    </div>
  );
}

export default App;
