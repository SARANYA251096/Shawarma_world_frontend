import React, { useEffect } from "react";
import Shawarma from "../components/Shawarma";
import { useDispatch, useSelector } from "react-redux";
import { getAllShawarmas } from "../actions/shawarmaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Filter from "../components/Filter";

export default function Homescreen() {
  const dispatch = useDispatch();
  const shawarmasState = useSelector((state) => state.getAllShawarmasReducer);
  const { shawarmas, error, loading } = shawarmasState;

  useEffect(() => {
    dispatch(getAllShawarmas());
  }, []);

  return (
    <div>
      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <Loading key="loading" />
        ) : error ? (
          <Error key="error" error="Something went wrong" />
        ) : shawarmas ? (
          shawarmas.map((shawarma, index) => (
            <div key={shawarma.id || index} className="col-md-3 m-3">
              <div>
                <Shawarma shawarma={shawarma} />
              </div>
            </div>
          ))
        ) : (
          <div>shawarma is empty {shawarmas}</div>
        )}
      </div>
    </div>
  );
}
