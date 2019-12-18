import React from "react";
import ReactDOM from "react-dom";
import user from "./user.json";

import App from "./components/App";
ReactDOM.render(<App user={user} />, document.getElementById("root"));
