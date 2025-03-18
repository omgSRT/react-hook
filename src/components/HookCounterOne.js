import React, { useState, useEffect } from "react";
import "../tailwind/output.css";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p class="font-extrabold text-blue-800">Hello world!</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounterOne;
