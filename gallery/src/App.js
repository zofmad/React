import React from "react";

import ReactDOM from "react-dom";


const Comp = () => React.createElement("h1", {}, "Hej!");
ReactDOM.render(React.createElement(Comp), document.getElementById("root"));