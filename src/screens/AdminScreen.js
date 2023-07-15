import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Addshawarma from "./Addshawarma";
import Editshawarma from "./Editshawarma";
import Orderslist from "./Orderslist";
import Shawarmaslist from "./Shawarmaslist";
import Userslist from "./Userslist";

export default function AdminScreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

useEffect(() => {
  if (!currentUser || !currentUser.isAdmin) {
    window.location.href = "/";
  }
}, [currentUser]);
console.log(currentUser)


  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to="/admin/userslist">Users List</Link>
            </li>
            <li>
              <Link to="/admin/shawarmaslist">Shawarmas List</Link>
            </li>
            <li>
              <Link to="/admin/addshawarma">Add Shawarma</Link>
            </li>
            <li>
              <Link to="/admin/orderslist">Orders List</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/admin" element={<Userslist />} />
            <Route path="/admin/userslist" element={<Userslist />} />
            <Route path="/admin/orderslist" element={<Orderslist />} />
            <Route path="/admin/shawarmaslist" element={<Shawarmaslist />} />
            <Route path="/admin/addshawarma" element={<Addshawarma />} />
            <Route
              path="/admin/editshawarma/:shawarmaid"
              element={<Editshawarma />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
