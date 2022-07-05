import { ADDDATA } from "./JobAction";

const init = {
    productData: [],
    totalPage:""
};

export const JobReducer = (store = init, { type, payload }) => {
    switch (type) {
      case ADDDATA:return {...store,productData:payload.product,totalPage:payload.totalPage}
    default:
      return store;
  }
};