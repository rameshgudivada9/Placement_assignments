import React, { useEffect } from "react"
import { useState } from "react"
import axios from "axios";
import App from '../App';


export const Jobdetails=()=>{
    const [jobdata,setJobdata]=useState([]);
    useEffect(()=>{
        axios("http://localhost:6276/user").then((res)=>{
            setJobdata(res.data)
            console.log(res.data)
        })
    },[])

    return(
        <div>{jobdata.map((el)=>{
            return(

                <div key = {el._id} className="container">
                    <div>
                        <h3>{el.CompanyName}</h3>
                          <h5>{el.jobTitle}</h5>
                    </div>
                    
                    </div>

            )
        })}</div>
    )
}