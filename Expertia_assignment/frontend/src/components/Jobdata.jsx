import { Link}from 'react-router-dom';
import "./jobdata.css";


export const Jobdata = ({ props }) => {
    const {
        CompanyName,
        jobTitle,
        salary,
        Location,
        skills
    } = props;
    return (
        <div className="container">
        <div className="job-card">
    
          <div className="field-div">
            <div><h3>{CompanyName}</h3></div>
          </div>
          <div className="field-div">
            <div> <h3>JobTitle::{jobTitle}</h3></div>
          </div>
          <div className="field-div">
            <div><h4>Salary::₹{salary}Lpa</h4></div>
                   </div>
          <div className="field-div">
            <div><h4>Location::{Location}</h4></div>
          </div>
          <div className="field-div">
            <div><h4>Skills::{skills}</h4></div>
          </div>
          <div className="field-div">
             <button><Link to="/form">APPLY</Link></button>
          </div>
        </div>
      
        </div>
    )
    
}