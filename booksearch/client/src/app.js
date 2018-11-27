import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
    <Router>
    <div>
        <Route axact path="/" component={HomePage} />
    </div>
    </Router>
);
export default App;