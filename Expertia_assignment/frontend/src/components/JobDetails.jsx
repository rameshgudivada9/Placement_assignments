import React, { useEffect } from "react"
import "./Jobdetail.css";
import { useDispatch, useSelector } from "react-redux";
import {  getProductData } from "../redux/JobReducer/JobAction";
import { Jobdata } from "./Jobdata";



export const Jobdetails=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProductData());

    },[])
    const jobdata = useSelector((store) => store.product.productData);


    return(

        <div className="product-page-div">
        {jobdata.map((elem) => (
          <Jobdata props={elem} key={elem._id} />
        ))}
      </div>

    )
}