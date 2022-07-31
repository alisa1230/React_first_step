import React from "react";
import ReactDOM from "react-dom";

import ColorfulMsg from "./components/ColorfulMsg";
import CountButton from "./components/CountButton";

const App = () => {
  return (
    <>
      <h2>Reactハンズオン</h2>
      <ColorfulMsg color="blue"> React is not difficult </ColorfulMsg>
      <ColorfulMsg color="green"> React is not difficult </ColorfulMsg>
      <ColorfulMsg color="red"> React is not difficult </ColorfulMsg>
      <CountButton />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
