import "./App.css";
import Layout from "./componments/Layout";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Dashboard />} />
          <Route path="/Profile" render={() =><Profile />}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
