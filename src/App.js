import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Toko from "./component/toko"
import TokoList from "./component/toko-list"
import Dorayaki from "./component/dorayaki"
import DorayakiList from "./component/dorayaki-list"
import AddToko from "./component/add-toko"
import AddDorayaki from "./component/add-dorayaki"
import AddStok from "./component/add-stok"

function App() {


  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/#" className="navbar-brand">
          Stand with Dorayaki
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/toko"} className="nav-link">
              Toko
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/dorayaki"} className="nav-link">
              Varian Dorayaki
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/toko"]} component={TokoList} />
          <Route exact path="/dorayaki" component={DorayakiList} />
          <Route
            path="/toko/:id/stok"
            render={(props) => (
              <AddStok {...props} />
            )}
          />
          <Route path="/toko/:id"
            render={(props) => (
              <Toko {...props} />
            )}
          />
          <Route
            path="/toko/add"
            render={(props) => (
              <AddToko {...props} />
            )}
          />
          <Route path="/dorayaki/add"
            render={(props) => (
              <AddDorayaki {...props} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
