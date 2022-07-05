import React, { useEffect } from "react"
import { useState } from "react"
import axios from "axios";
import "./Jobdetail.css";
import { Link}from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {  getProductData } from "../redux/JobReducer/JobAction";



export const Jobdetails=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProductData());

    },[])
    const jobdata = useSelector((store) => store.product.productData);


    return(
        <div>{jobdata.map((el)=>{
            return(

                <div key = {el._id} className="container">
                    <div className="sub">
                        <h3>{el.CompanyName}</h3>
                          <h5>JobTitle::{el.jobTitle}</h5>
                          <h5>Salary::{el.salary}Lpa</h5>
                          <h5>Location::{el.Location}</h5>
                          <h5>Skills::{el.skills}</h5>
                         <button><Link to="/form">APPLY</Link></button>
                    </div>
                    
                    </div>

            )
        })}</div>
    )
}