import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter Your First Name"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Your Last Name"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your First Name Is - {name.firstName}</h2>
        <h2>Your Last Name Is - {name.lastName}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
