import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./SearchAppBar.css";

// import Input from '@mui/material/Input';
import { Input } from '@mui/material'

// or


 const SearchAppBar=()=>{
  return (
    <div className="Searchdiv-main">
      <div className="searchIcon"><SearchRoundedIcon/></div>
     <div className="searchinputdiv"><Input className="searchInput" />
     </div>
    </div>
  )
}
export default SearchAppBar;