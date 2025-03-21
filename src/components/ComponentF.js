import React, { useContext } from "react";
import { CountContext } from "../App";
import { UserContext, ChannelContext } from "../App";

function ComponentF() {
  //   return (
  //     <div>
  //         <UserContext.Consumer>
  //             {
  //                 user => {
  //                     return (
  //                         <ChannelContext.Consumer>
  //                             {
  //                                 channel => {
  //                                     return <div>User context value {user}, channel context value {channel}</div>
  //                                 }
  //                             }
  //                         </ChannelContext.Consumer>
  //                     )
  //                 }
  //             }
  //         </UserContext.Consumer>
  //     </div>
  //   )
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentF - {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentF;
