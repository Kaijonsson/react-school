import React, { useState } from "react";
import Style from "./Style.css";

function Form() {

  const [nameInput, setNameInput] = useState("")
  const [lastNameInput, setLastNameInput] = useState("")
  const [ageInput, setAgeInput] = useState("")
  const [addressInput, setAddressInput] = useState("")

  
  const [name, addName] = useState([]) 
  const [lastName, addLastName] = useState([])
  const [age, addAge] = useState([])
  const [streetAddress, addStreetAddress] = useState([])


  const updateName = (stringToAdd) => {
    addName(arr => [...arr, stringToAdd])
  }
  const updateLastName = (stringToAdd) => {
    addLastName(arr => [...arr, stringToAdd])
  }
  const updateAge = (stringToAdd) => {
    addAge(arr => [...arr, stringToAdd])
  }
  const updateAddress = (stringToAdd) => {
    addStreetAddress(arr => [...arr, stringToAdd])
  }

  const [searchWord, setSearchWord] = useState('')
  const indexOfFilteredName = name.indexOf(searchWord)
  //hitta index på namn som matchar sökord.



  const filterName = (searchWord) => {
    const filteredName = name.filter(names => names === searchWord)
    //hämta namn som matchar sökordet

    if (filteredName.length === 0) {
      return console.log("couldnt find searchword")
    }

    return filteredName
  }

  const findValue = (array, indexToFind) => {
    //hitta värde som matchar index
    var returnArray = ""

    array.find(function(value, index){
      if(index === indexToFind){
        returnArray = value
      }
    })
    return returnArray
  }
  
  const [nameHeader, setNameHeader] = useState('')
  const [lNameHeader, setLNameHeader] = useState('')
  const [ageHeader, setAgeHeader] = useState('')
  const [addressHeader, setAddressHeader] = useState('')


  return (

    <div className="main-containter">

      <form className="form-containter">

        <div className="form-div">

          <label>Name</label>
          <input type="text" placeholder="Name" onChange={(e) => {
            setNameInput(e.target.value)
          }}></input>
          
        </div>

        <div className="form-div">
          <label>Last name</label>
          <input type="text" placeholder="last name" onChange={(e) => {
            setLastNameInput(e.target.value)
          }}></input>
        </div>

        <div className="form-div">
          <label>Age</label>
          <input type="text" placeholder="age" onChange={(e) => {
            setAgeInput(e.target.value)
          }}></input>
        </div>

        <div className="form-div">
          <label>Street Address</label>
          <input type="text" placeholder="Street Adress" onChange={(e) => {
            setAddressInput(e.target.value)
          }}></input>
        </div>

        <button type="button" onClick={() => {
          updateName(nameInput)
          updateLastName(lastNameInput)
          updateAge(ageInput)
          updateAddress(addressInput)
        }} style={{
          marginTop: 20,
        }}>Submit</button>

      </form>
      <div>
      <label>Sök efter person</label>
      <input type="text" placeholder="Search..." onChange={(e) => 
        setSearchWord(e.target.value)
      }></input>
      <button onClick={() => {
          setNameHeader(filterName(searchWord))
          setLNameHeader(findValue(lastName, indexOfFilteredName))
          setAgeHeader(findValue(age, indexOfFilteredName))
          setAddressHeader(findValue(streetAddress, indexOfFilteredName))
      }}>Search</button> 
      </div>

        <ul>
          <li>{nameHeader}</li>
          <li>{lNameHeader}</li>
          <li>{ageHeader}</li>
          <li>{addressHeader}</li>
        </ul>

    </div>
  );
}

export default Form;
