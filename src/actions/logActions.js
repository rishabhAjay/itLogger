import axios from "axios";
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from "./types.js";

//get logs
export const getLogs = () => {
  //in order to specify and dispatch actions, create a function within the action. This will be async since we are handling with the API
  return async (dispatch) => {
    try {
      //setLoading sets the loading state to true
      setLoading();
      const res = await axios.get("/logs");
      dispatch({
        type: GET_LOGS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };
};

//add log
export const addLog = (log) => {
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

      const res = await axios.post("/logs", log, config);
      dispatch({
        type: ADD_LOG,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };
};

//delete log
export const deleteLog = (id) => {
  //in order to specify and dispatch actions, create a function within the action. This will be async since we are handling with the API
  return async (dispatch) => {
    try {
      //setLoading sets the loading state to true
      setLoading();

      await axios.delete(`/logs/${id}`);
      dispatch({
        type: DELETE_LOG,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };
};
//search logs
export const searchLogs = (text) => {
  //in order to specify and dispatch actions, create a function within the action. This will be async since we are handling with the API
  return async (dispatch) => {
    try {
      //setLoading sets the loading state to true
      setLoading();
      const res = await axios.get(`/logs?q=${text}`);
      dispatch({
        type: SEARCH_LOGS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };
};

//set current log on the form(for updating)
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//clear current log in the form
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//update log
export const updateLog = (log) => {
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
      const res = await axios.put(`/logs/${log.id}`, log, config);
      dispatch({
        type: UPDATE_LOG,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };
};

//set loading to true
export const setLoading = () => {
  //you are basically only changing the state to true so nothing fancy required
  return {
    type: SET_LOADING,
  };
};
