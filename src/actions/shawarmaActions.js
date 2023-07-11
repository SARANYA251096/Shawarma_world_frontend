import axios from "axios";
import { config } from "../config";

export const getAllShawarmas = () =>async dispatch => {
  dispatch({ type: "GET_SHAWARMAS_REQUEST" });

  try {
    const response =await axios.get(config.api + "/api/shawarmas/getallshawarmas");
    dispatch({ type: "GET_SHAWARMAS_SUCCESS",payload : response.data });
    console.log(response);
  } catch (error) {
    dispatch({ type: "GET_SHAWARMAS_FAILED",payload :error });
    console.log(error);
  }
};

export const getShawarmaById = (shawarmaid) => async (dispatch) => {
  dispatch({ type: "GET_SHAWARMABYID_REQUEST" });
  try {
    const response = await axios.post(`${config.api}/api/shawarmas/getshawarmabyid`, {
      shawarmaid,
    });
    console.log(response);
    dispatch({ type: "GET_SHAWARMABYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_SHAWARMABYID_FAILED", payload: error });
  }
};

export const filterShawarmas = (searchkey, category) => async (dispatch) => {
  dispatch({ type: "GET_SHAWARMAS_REQUEST" });
  try {
    var filteredShawarmas;
    const response = await axios.get(
      `${config.api}/api/shawarmas/getallshawarmas`
    );
    filteredShawarmas = response.data.filter((shawarma) =>
      shawarma.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filteredShawarmas = response.data.filter(
        (shawarma) => shawarma.category.toLowerCase() == category
      );
    }
    dispatch({ type: "GET_SHAWARMAS_SUCCESS", payload: filteredShawarmas });
  } catch (error) {
    dispatch({ type: "GET_SHAWARMAS_FAILED", payload: error });
  }
};

export const addShawarma = (shawarma) => async (dispatch) => {
  dispatch({ type: "ADD_SHAWARMA_REQUEST" });
  try {
    const response = await axios.post(
      `${config.api}/api/shawarmas/addshawarma`,
      {
        shawarma,
      }
    );
    console.log(response);
    dispatch({ type: "ADD_SHAWARMA_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_SHAWARMA_FAILED", payload: error });
  }
};

export const editShawarma = (editedshawarma) => async (dispatch) => {
  dispatch({ type: "EDIT_SHAWARMA_REQUEST" });
  try {
    const response = await axios.post(
      `${config.api}/api/shawarmas/editshawarma`,
      {
        editedshawarma,
      }
    );
    console.log(response);
    dispatch({ type: "EDIT_SHAWARMA_SUCCESS" });
    window.location.href = "/admin/shawarmaslist";
  } catch (error) {
    dispatch({ type: "EDIT_SHAWARMA_FAILED", payload: error });
  }
};

export const deleteShawarma = (shawarmaid) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${config.api}/api/shawarmas/deleteshawarma`,
      {
        shawarmaid,
      }
    );
    alert("Shawarma Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};
