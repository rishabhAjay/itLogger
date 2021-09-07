import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SEARCH_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from "../actions/types.js";

//make the initial state here
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

//set the initial state as the default
const logReducer = (state = initialState, action) => {
  switch (action.type) {
    //similar to context API
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => action.payload !== log.id),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          action.payload.id === log.id ? action.payload : log
        ),
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default logReducer;
