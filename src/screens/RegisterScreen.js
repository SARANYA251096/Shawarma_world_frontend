import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const registerState = useSelector(state => state.registerUserReducer)
  const {error,loading,success}=registerState

  const dispatch=useDispatch()

  function register() {
    if (password!==cpassword) {
      alert("Password is not matched!")
    } else {
      const user = {
        name,
        email,
        password
      }
      console.log(user)
      dispatch(registerUser(user))
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-body rounded">

          {loading && (<Loading />)}
          {success && (<Success success="User Registered Successfully" />)}
          {error && (<Error error="User already registered"/>)}

          <h2 className="text-center m-2">Register</h2>
          <div>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
              required
            />
            <button onClick={register} className="btn mt-3 mb-3">
              REGISTER
            </button>
            <br />
            <a href="/login" style={{ color: "black" }}>
              CLICK HERE TO LOGIN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
