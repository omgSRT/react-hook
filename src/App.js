import React from "react";
import "./App.css";
import CounterTwo from "./components/CounterTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterTwo />
    </div>
  );
}

export default App;
