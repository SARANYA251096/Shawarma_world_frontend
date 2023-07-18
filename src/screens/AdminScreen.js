import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Addshawarma from "./Addshawarma";
import Editshawarma from "./Editshawarma";
import Orderslist from "./Orderslist";
import Shawarmaslist from "./Shawarmaslist";
import Userslist from "./Userslist";

export default function AdminScreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  useEffect(() => {
    if (currentUser.isAdmin === true) {
      window.location.href = "/";
    }
  }, []);
console.log(currentUser)
  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to={"/admin/userslist"}>Users List</Link>
            </li>
            <li>
              <Link to={"/admin/shawarmaslist"}>Shawarmas List</Link>
            </li>
            <li>
              <Link to={"/admin/addshawarma"}>Add Shawarma</Link>
            </li>
            <li>
              <Link to={"/admin/orderslist"}>Orders List</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/admin" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route
              path="/admin/shawarmaslist"
              component={Shawarmaslist}
              exact
            />
            <Route path="/admin/addshawarma" component={Addshawarma} exact />
            <Route
              path="/admin/editshawarma/:shawarmaid"
              component={Editshawarma}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}
