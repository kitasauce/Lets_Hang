import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_BRAWLS } from '../utils/queries';
// import { CREATE_BRAWL } from '../utils/mutations';


const Brawl = () => {
  
  const [variables, setvariables] = useState("")
  const [formState, setFormState] = useState({

  
    location: '',
    weapon: '',
  
  });
 
  const {loading,data} = useQuery(QUERY_BRAWLS,{
    variables: {...variables}
  })
  
  const findBrawls = data?.findLocWeapon || [];


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
    // try {

    // } catch (err) {
    //   console.error(err);
    // }

    // setFormState({
    //   time: '',
    //   location: '',
    //   hobby: '',
    // });
  };
  console.log("form state === ",formState)
  console.log("variables ==== ", variables)
  console.log("find brawls ========", findBrawls)
  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">

        <h1>Search for a Brawl</h1>
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
            <option key={5} value={"135 St"}>
              135 st
            </option>
          </select>
          <label>Weapon</label>
          <select name="weapon" onChange={handleInputChange}>
          
            <option key={6} value={"Chancleta"}>
              Chancleta
            </option>
            <option key={7} value={"Light Sabers"}>
              Light Sabers
            </option>
            <option key={9} value={"Lead Pipe"}>
              Lead Pipe
            </option>
            <option key={10} value={"Spar Sticks"}>
              Spar Sticks
            </option>
            <option key={11} value={"Fists"}>
              Fists
            </option>
          </select>
          <button className="btn btn-danger" type="submit">
          Search
          </button>
        </form>

      </div>

    {findBrawls.map((brawl, i)=>{
      return(
        <div key={i}>

          <h1>{brawl.weapon}</h1>
          <h1>{brawl.time}</h1>
          <h1>{brawl.location}</h1>
        </div>
      )
    })}
      
  
  
    </div>
  );
};

export default Brawl;
