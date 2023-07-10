import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editShawarma, getShawarmaById } from "../actions/shawarmaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Editshawarma({ match }) {
  const dispatch = useDispatch();

  const [name, setname] = useState("");
  const [rollprice, setrollprice] = useState();
  const [plateprice, setplateprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getshawarmabyidstate = useSelector((state) => state.getShawarmaByIdReducer);
  const { shawarma, error, loading } = getshawarmabyidstate;
  const editshawarmastate = useSelector((state) => state.editShawarmaReducer);
  const { editloading, editerror, editsuccess } = editshawarmastate;

  useEffect(() => {
    if (shawarma) {
      if (shawarma._id == match.params.shawarmaid) {
        setname(shawarma.name);
        setdescription(shawarma.description);
        setcategory(shawarma.category);
        setrollprice(shawarma.prices[0]["roll"]);
        setplateprice(shawarma.prices[0]["plate"]);
       
        setimage(shawarma.image);
      } else {
        dispatch(getShawarmaById(match.params.shawarmaid));
      }
    } else {
      dispatch(getShawarmaById(match.params.shawarmaid));
    }
  }, [shawarma, dispatch]);

  function formHandler(e) {
    e.preventDefault();
    const editedshawarma = {
      _id: match.params.shawarmaid,
      name,
      image,
      description,
      category,
      prices: {
        roll: rollprice,
        plate: plateprice,
       
      },
    };
    dispatch(editShawarma(editedshawarma));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Edit Shawarma</h1>

        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && <Success success="Shawarma details edited successfully" />}
        {editloading && <Loading />}

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
            Edit Shawarma
          </button>
        </form>
      </div>
    </div>
  );
}
