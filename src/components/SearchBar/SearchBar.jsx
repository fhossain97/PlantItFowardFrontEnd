import React, {useState} from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import CloseIcon from '@mui/icons-material/Close';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;
  padding: 15px;
  height: 30px;
  width: 500px;
}
  
input:focus {
      background-color: #D0F0C0;
      color:black
    }
.dataResult {
  /* margin-top: 5px; */
  width: 300px;
  height: 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
}
.link:hover {
  background-color: lightgray;
}
#clearBtn {
  cursor: pointer;
}
.dropdownColor {
  box-shadow: none;
  border: transparent;
  background-color: transparent;
  width: 230px;
}
.wholeInput{
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
}
.hideResults{
  background-color: transparent;
  border: transparent;
}
`;



const SearchBar = ({placeholder, data}) => {

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
        console.log(newFilter)
      }
  }

  const clearInput = () => {
      setFilteredData([])
      setWordEntered("")
  }

//Reference for dropdown toggling: https://bobbyhadz.com/blog/react-add-remove-class-on-click

  const handleClick = (e) =>{
    e.currentTarget.classList.toggle('dropdownToggle')
  }


  return (



<SearchBarContainer className="d-flex" >
    <Dropdown  >
        <Dropdown.Toggle id="dropdown-autoclose-true" className='dropdownColor'>
        <Form className="d-flex">
                  <Form.Control
                    type="text"
        placeholder={placeholder} 
             value={wordEntered} 
             onChange={handleFilter}
                  />
                  
      <div className="searchIcon">
          {filteredData.length === 0 ? (
            <Button variant="outline-success">Search</Button>
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> 
                  
                </Form>
          
        </Dropdown.Toggle>

        <Dropdown.Menu onClick={handleClick} className="hideResults">
        {filteredData.length !== 0 && (
          
          <div className="dataResult">
             {filteredData.map((item) =>{
              //  console.log(item)
                 return (
                 <Link key={item._id} onClick={clearInput} to={`/item/${item._id}`  } > 
                 <p className="link">
                   {item.name}
                 </p> 
                 </Link>
                 )
                })}
         </div>
         )}
        </Dropdown.Menu>
      </Dropdown>
    </SearchBarContainer>


  )
}

export default SearchBar



