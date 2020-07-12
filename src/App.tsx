import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages";
import NotFound from "./404";

interface Props {}

const App = (props: Props) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
