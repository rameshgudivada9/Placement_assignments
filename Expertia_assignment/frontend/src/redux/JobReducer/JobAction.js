
import axios from "axios";
export const ADDDATA = "ADDDATA";

export const addData = (val) => {
  return { type: ADDDATA, payload: val };
};

export const getProductData = (val) => async (dispatch) => {
  axios
    .get("https://expertia-api.herokuapp.com/?page=1&perPage=6")
    .then((res) => dispatch(addData(res.data)))
    .catch((error) => console.log(error));
};
export const getProductDataFilterSort = (val) => async (dispatch) => {
  console.log(val);
  axios
    .get(
      ` https://expertia-api.herokuapp.com/?${
        val.Location ? `Location=${val.Location}` : ""
      }&${val.jobTitle ? `jobTitle=${val.jobTitle}` : ""}&${
        val.sort ? `sort=${val.sort}` : ""
      }&${val.page ? `page=${val.page}` : ""}&${
        val.perPage ? `perPage=${val.perPage}` : ""
      }`
    )
    .then((res) => dispatch(addData(res.data)))
    .catch((error) => console.log(error));
};