import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./navbar.css";
import { logoutUser } from "../../actions/userAction";

export default function Index() {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch=useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Shawarma World
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbar-nav-right">
              {currentUser ? (
                <div class="dropdown mt-2">
                  <a
                    style={{color:"black"}}
                    class="dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {currentUser.name}
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/orders">
                        Orders
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}>
                        <li>Logout</li>
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/login">
                    Login
                  </a>
                </li>
              )}

              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart{cartState.cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
