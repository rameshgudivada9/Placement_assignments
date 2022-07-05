import React, { useEffect } from "react"
import { useState } from "react"
import axios from "axios";
import "./Jobdetail.css";
import { Link}from 'react-router-dom';



export const Jobdetails=()=>{
    const [jobdata,setJobdata]=useState([]);
    useEffect(()=>{
        axios("http://localhost:6276/").then((res)=>{
            setJobdata(res.data)
            console.log(res.data)
        })
    },[])

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