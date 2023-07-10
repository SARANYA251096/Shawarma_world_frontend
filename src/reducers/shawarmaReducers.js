export const getAllShawarmasReducer = (state = { shawarmas: [] }, action) => {
  switch (action.type) {
    case "GET_SHAWARMAS_REQUEST":
      return {
        loading: true,
        ...state
      };
    case "GET_SHAWARMAS_SUCCESS":
      return {
        loading: false,
        shawarmas: action.payload
      };
    case "GET_SHAWARMAS_FAILED":
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};


export const getShawarmaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SHAWARMABYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_SHAWARMABYID_SUCCESS":
      return {
        loading: false,
        SHAWARMA: action.payload,
      };
    case "GET_SHAWARMABYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addShawarmaReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SHAWARMA_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_SHAWARMA_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_SHAWARMA_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};


export const editShawarmaReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_SHAWARMA_REQUEST":
      return {
        editloading: true,
        ...state,
      };
    case "EDIT_SHAWARMA_SUCCESS":
      return {
        editloading: false,
        editsuccess: true,
      };
    case "EDIT_SHAWARMA_FAILED":
      return {
        editerror: action.payload,
        editloading: false,
      };
    default:
      return state;
  }
};
