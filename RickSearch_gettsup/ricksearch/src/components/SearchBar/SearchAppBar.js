import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./SearchAppBar.css";
import { Input } from '@mui/material'
import { useState } from 'react';

// or


 const SearchAppBar=({props})=>{
console.log(props)
const [searchTerm,setSearchTerm]=useState('');
console.log(searchTerm);
  return (
    <div className="Searchdiv-main">
      <div className="searchIcon"><SearchRoundedIcon/></div>
     <div className="searchinputdiv">
       <Input className="searchInput" placeholder="Search for a contact" onChange={event=>{setSearchTerm(event.target.value)}}/>
       
     </div>
     
    </div>
  )
}
export default SearchAppBar;