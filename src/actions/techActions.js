import {
  TECHS_ERROR,
  ADD_TECH,
  GET_TECHS,
  DELETE_TECH,
  SET_LOADING,
} from "../actions/types.js";
import axios from "axios";

//get techs
export const getTechs = () => {
  //in order to specify and dispatch actions, create a function within the action. This will be async since we are handling with the API
  return async (dispatch) => {
    try {
      //setLoading sets the loading state to true
      setLoading();
      const res = await axios.get("/techs");
      dispatch({
        type: GET_TECHS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

//add techs
export const addTech = (tech) => {
  //in order to specify and dispatch actions, create a function within the action. This will be async since we are handling with the API
  return async (dispatch) => {
    try {
      //setLoading sets the loading state to true
      setLoading();
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post("/techs", tech, config);
      dispatch({
        type: ADD_TECH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

//delete techs
export const deleteTech = (id) => {
  //in order to specify and dispatch actions, create a function within the action. This will be async since we are handling with the API
  return async (dispatch) => {
    try {
      //setLoading sets the loading state to true
      setLoading();

      await axios.delete(`/techs/${id}`);
      dispatch({
        type: DELETE_TECH,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.data,
      });
    }
  };
};

//techs error

//set loading to true
export const setLoading = () => {
  //you are basically only changing the state to true so nothing fancy required
  return {
    type: SET_LOADING,
  };
};
