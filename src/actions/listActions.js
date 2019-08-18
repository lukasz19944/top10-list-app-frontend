import axios from "axios";
import { GET_LISTS, GET_LIST } from "./types";

export const getLists = () => async dispatch => {
  const res = await axios.get("http://localhost:8090/api/list");
  dispatch({
    type: GET_LISTS,
    payload: res.data
  });
};

export const getList = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8090/api/list/${id}`);
    dispatch({
      type: GET_LIST,
      payload: res.data
    });
  } catch (error) {
    history.push("/");
  }
};
