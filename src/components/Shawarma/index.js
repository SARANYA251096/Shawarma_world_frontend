import React, { useState } from "react";
import "./shawarma.css";
// import shawarmas from '../../shawarmas';
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";

export default function Index({ shawarma }) {
  const [varient, setVarient] = useState("roll");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch=useDispatch()
  function addtocart() {
    dispatch(addToCart(shawarma,quantity,varient))
  }
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{shawarma.name}</h1>
        <img src={shawarma.image} className="img-fluid" />
      </div>
      <div className="flex-container">
        <div className="w-100 m-2">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {shawarma.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-2">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1 pz p-1">
            Price:{shawarma.prices[0][varient] * quantity}Rs/-
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>ADD TO CART</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{shawarma.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={shawarma.image} className="img-fluid" style={{ height: "200px",width:'400px'}} />
          <p className="mt-3">{shawarma.description }</p>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
