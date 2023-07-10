import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addShawarma } from "../actions/shawarmaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Addshawarma() {
  const [name, setname] = useState("");
  const [rollprice, setrollprice] = useState();
  const [plateprice, setplateprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  const addShawarmastate = useSelector((state) => state.addShawarmaReducer);
  const { success, error, loading } = addShawarmastate;

  function formHandler(e) {
    e.preventDefault();
    const shawarma = {
      name,
      image,
      description,
      category,
      prices: {
        roll: rollprice,
        plate: plateprice,
        
      },
    };
    console.log(shawarma);
    dispatch(addShawarma(shawarma));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Add shawarma</h1>

        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New shawarma added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="roll varient price"
            value={rollprice}
            onChange={(e) => {
              setrollprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="plate varient price"
            value={plateprice}
            onChange={(e) => {
              setplateprice(e.target.value);
            }}
          />
         
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Add shawarma
          </button>
        </form>
      </div>
    </div>
  );
}
