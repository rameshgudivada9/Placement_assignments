import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./SearchAppBar.css";


 const SearchAppBar=()=>{
  return (
    <div className="Searchdiv-main">
      <div className="searchIcon"><SearchRoundedIcon/></div>
     <div className="searchinputdiv"> <input type="search" className="searchInput" placeholder="Search for acontact "/></div>
    </div>
  )
}
export default SearchAppBar;