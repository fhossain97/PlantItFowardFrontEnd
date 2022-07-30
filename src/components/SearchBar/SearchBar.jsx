import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import { Link } from 'react-router-dom'


const SearchBarContainer = styled.nav`
  .searchInputs {
    display: flex;
    justify-content: space-evenly;
  }
 
`;

function SearchBar({placeholder, data}) {
  return (
      <SearchBarContainer className='search'>
        <div className='searchInputs'>
            <input type="text" placeholder={placeholder} />
            <div className='searchIcon'><SearchIcon/></div>
        </div>
        <div className='dataResult'>
            {data.map((item, key) =>{
                return <Link to={`/item/${item._id}`} > {item.name} </Link>
                
                // <a className='dataItem' href={value.images}>{value.name}</a>
            })}
        </div>

    </SearchBarContainer>
  )
}

export default SearchBar