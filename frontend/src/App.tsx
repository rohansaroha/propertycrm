import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/assets/scss/app.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Circular from "./components/announcements/Circular";
import Profile from "./components/students/profile/Profile";
import Attendance from "./components/students/attendance/Attendance";
import Alumni from "./components/students/alumni/Alumni";
import Archive from "./components/students/archive/Archive";
import Admission from "./components/students/admissions/Admission";
import { IdProvider } from "./hooks/IdContext";

function App() {
  return (
      <IdProvider>
          <div className={"App"}>
              <Router>
                  <div className={"app-content"}>
                      <Switch>
                          <Route path='/login' exact={true} component={Login}/>
                          <Route path='/register' exact={true} component={Register}/>
                          <Route path= '/' exact={true} component={Home}/>
                          <Route path= '/masters/sites' exact={true} component={Circular}/>
                          <Route path='/students/profile' exact={true} component={Profile}/>
                          <Route path='/students/attendance' exact={true} component={Attendance}/>
                          <Route path='/students/alumni' exact={true} component={Alumni}/>
                          <Route path='/students/archive' exact={true} component={Archive}/>
                          <Route path='/students/admissions' exact={true} component={Admission}/>
                      </Switch>
                  </div>
              </Router>
          </div>
      </IdProvider>
  );
}

export default App;
