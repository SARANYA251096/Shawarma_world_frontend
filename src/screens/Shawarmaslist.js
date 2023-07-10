import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteShawarma, getAllShawarmas } from "../actions/shawarmaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Shawarmaslist() {
  const dispatch = useDispatch();

  const shawarmasstate = useSelector((state) => state.getAllShawarmasReducer);
  const { shawarmas, error, loading } = shawarmasstate;

  useEffect(() => {
    dispatch(getAllShawarmas());
  }, []);

  return (
    <div>
      <h2>Shawarmas List</h2>

      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <table className="table table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shawarmas &&
            shawarmas.map((shawarma) => {
              return (
                <tr>
                  <td>{shawarma.name}</td>
                  <td>
                    Roll : {shawarma.prices[0]["small"]} <br />
                    Plate: {shawarma.prices[0]["medium"]} 
                    
                  </td>
                  <td>{shawarma.category}</td>
                  <td>
                    <i
                      className="fa fa-trash m-1"
                      onClick={() => {
                        dispatch(deleteShawarma(shawarma._id));
                      }}
                    ></i>
                    <Link to={`/admin/editshawarma/${shawarma._id}`}>
                      <i className="fa fa-edit m-1"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
