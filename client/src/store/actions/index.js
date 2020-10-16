import axios from "axios";
import {
  FETCH_USER,
  FETCH_PRODUCTS,
  EDIT_PRODUCTS,
  INSERT_PRODUCTS,
  DELETE_PRODUCTS,
} from "./types";
const baseUrl = "http://localhost:5004";
export const fetchUser = (e) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseUrl}/auth/user`, {
      withCredentials: true,
    });

    dispatch({ type: FETCH_USER, payloads: res.data });
  };
};

export const fetchProducts = (e) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseUrl}/list`);

    dispatch({ type: FETCH_PRODUCTS, payloads: res.data });
  };
};

export const editProducts = (id, data, history) => {
  return async (dispatch) => {
    const res = await axios.put(`${baseUrl}/list/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    history.push("/");
    dispatch({ type: EDIT_PRODUCTS, payloads: res.data });
  };
};
export const insertProducts = (data, history) => {
  return async (dispatch) => {
    const res = await axios.post(`${baseUrl}/list`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    history.push("/");
    dispatch({ type: INSERT_PRODUCTS, payloads: res.data });
  };
};
export const deleteProducts = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`${baseUrl}/list/${id}`);
    dispatch({ type: DELETE_PRODUCTS, payloads: id });
  };
};
