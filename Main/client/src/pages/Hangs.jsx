import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_HANGS } from '../utils/queries';
// import { QUERY_BRAWLS } from '../utils/queries';
// import { CREATE_BRAWL } from '../utils/mutations';


const Hang = () => {
  const [variables, setvariables] = useState("")
  const [formState, setFormState] = useState({

  
    location: '',
    hobby: '',
  
  });
 
  const {loading,data} = useQuery(QUERY_HANGS,{
    variables: {...variables}
  })

  const findHangs = data?.findLocHobby || [];


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setvariables(formState)
   

    // setFormData({
    //   time: '',
    //   location: '',
    //   hobby: '',
    // });
  };
  console.log("form state === ",formState)
  console.log("variables ==== ", variables)
  console.log("find hangs ========", findHangs)
  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">

        <h1>Search for a Hang</h1>
      </div>
      <div className="card-body m-5">

        <form onSubmit={handleFormSubmit}>
          <label>Location</label>
          <select name="location" onChange={handleInputChange}>
         
            <option key={1} value={"theSquare"}>
              The Square
            </option>
            <option key={2} value={"riversideDr"}>
              Riverside Dr & 133
            </option>
            <option key={3} value={"publicSafetyBldg"}>
              Public Safety Building
            </option>
            <option key={4} value={"prentisCafe"}>
              Prentis Cafe
            </option>
            <option key={5} value={"135 st"}>
              135 st
            </option>
          </select>
          <label>Hobbies</label>
          <select name="hobby" onChange={handleInputChange}>
            
            <option key={6} value={"birdwatching"}>
              Birdwatching
            </option>
            <option key={7} value={"pokemonGo"}>
              Pokemon-Go
            </option>
            <option key={9} value={"coding"}>
              Coding
            </option>
            <option key={10} value={"chessGame"}>
              Chess Game
            </option>
            <option key={11} value={"coffeeChat"}>
              Coffee & Chat
            </option>
          </select>
          <button className="btn btn-danger" type="submit">
          Search
          </button>
        </form>

      </div>
      
      {findHangs.map((hang, i)=>{
      return(
        <div key={i}>

          <h1>{hang.hobby}</h1>
          <h1>{hang.time}</h1>
          <h1>{hang.location}</h1>
        </div>
      )
    })}
    </div>
  );
};

export default Hang;
