
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { CreateResume } from "./components/CreateResume";
import { ViewResume } from "./components/ViewResume";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Switch>
            <Route path="/" component={CreateResume} exact />
            <Route path="/view" component={ViewResume} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
