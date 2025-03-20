import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../App";

function ComponentE() {
  const userContext = useContext(UserContext);
  const channelContext = useContext(ChannelContext);

  return (
    <div>
      <ComponentF />
      {userContext} - {channelContext}
    </div>
  );
}

export default ComponentE;
