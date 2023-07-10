import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Addshawarma from "./Addshawarma";
import Editshawarma from "./Editshawarma";
import Orderslist from "./Orderslist";
import Shawarmaslist from "./Shawarmaslist";
import Userslist from "./Userslist";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

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
              <Link to={"/admin/shawarmaslist"}>shawarmas List</Link>
            </li>
            <li>
              <Link to={"/admin/addshawarma"}>Add shawarma</Link>
            </li>
            <li>
              <Link to={"/admin/orderslist"}>Orders List</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/admin" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route path="/admin/shawarmaslist" component={Shawarmaslist} exact />
            <Route path="/admin/addshawarma" component={Addshawarma} exact />
            <Route
              path="/admin/editshawarma/:shawarmaid"
              component={Editshawarma}
              exact
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
