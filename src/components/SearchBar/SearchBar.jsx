import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

// https://www.youtube.com/watch?v=x7niho285qs&t=1900s

const SearchBarContainer = styled.nav`

  .searchInputs {
    display: flex;
    justify-content: center;
  }

  .dropdownToggle{
    display: none;
  }

  .search input {
  background-color: white;
  border: 0;
  border-radius: 2px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;
  padding: 15px;
  height: 30px;
  width: 350px;
}

.searchIcon {
  height: 30px;
  width: 30px;
  background-color: white;
  display: grid;
  place-items: center;
}

input:focus {
  outline: none;
}

.searchIcon svg {
  font-size: 15px;
  margin: 0px;
}

.dataResult {
  margin-top: 5px;
  width: 300px;
  height: 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
}

.dataResult::-webkit-scrollbar {
display: none;
}

.dataResult .dataItem {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
}

.dataItem p {
  margin-left: 10px;
}

.link {
  text-decoration: none;
}

.link:hover {
  background-color: lightgray;
}

#clearBtn {
  cursor: pointer;
}
`;


function SearchBar({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState("")

    const handleFilter = (e) => {
        const searchWord = e.target.value
        setWordEntered(searchWord)
        const newFilter= data.filter((value) =>{
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        if(searchWord === "") {
            setFilteredData([])
        }else{
            setFilteredData(newFilter)
        }
    }

    const clearInput = () => {
        setFilteredData([])
        setWordEntered("")
    }

    // https://bobbyhadz.com/blog/react-add-remove-class-on-click

    const handleClick = (e) =>{
      e.currentTarget.classList.toggle('dropdownToggle')
      window.location.reload(true)

    }
  return (
    
    <SearchBarContainer className="search">
    <Dropdown className="d-inline mx-2" >
        <Dropdown.Toggle id="dropdown-autoclose-true">
          <div>
          <input type="text" 
             placeholder={placeholder} 
             value={wordEntered} 
             onChange={handleFilter} />
             {/* <div className="searchIcon">
                 {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
             </div> */}
         </div>
          
        </Dropdown.Toggle>

        <Dropdown.Menu onClick={handleClick}>
        {filteredData.length !== 0 && (
          
          <div className="dataResult">
             {filteredData.map((item, key) =>{
                 return (<Link onClick={clearInput} to={`/item/${item._id}` } > 
                 <p className="link">
                   {item.name}
                 </p> 
                 </Link>)
              })}
         </div>
         )}
        </Dropdown.Menu>
      </Dropdown>
    </SearchBarContainer>
    
  )
}

export default SearchBar