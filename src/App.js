import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Users from "./components/Users";

function App() {
  return (
    <Router>
      <Users />
    </Router>
  );
}

export default App;
