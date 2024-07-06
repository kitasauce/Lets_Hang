import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_HANGS } from '../utils/queries';
// import { QUERY_BRAWLS } from '../utils/queries';
// import { CREATE_BRAWL } from '../utils/mutations';
// import { CREATE_MATCHUP } from '../utils/mutations';

const Brawl = () => {
  // const { loading, data } = useQuery(QUERY_HANGS);

  // const hangList = data?.hangList || [];

  const [formData, setFormData] = useState({
    time: '',
    location: '',
    weapon: '',
  });
 
  // const [queryMatchup, { error }] = useMutation(CREATE_HANG);
 
  let navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createMatchup({
        variables: { ...formData },
      });

      navigate(`/matchup/${data.createMatchup._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      time: '',
      location: '',
      hobby: '',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Search for a Hang</h1>
      </div>
      <div className="card-body m-5">

        <form onSubmit={handleFormSubmit}>
          <label>Location</label>
          <select name="tech1" onChange={handleInputChange}>
            {/* {techList.map((tech) => {
                return (
                  <option key={tech._id} value={tech.name}>
                    {tech.name}
                  </option>
                );
              })} */}
            <option key={1} value={"theSqaure"}>
              The Square
            </option>
            <option key={2} value={"scienceCenter"}>
              Science Center
            </option>
            <option key={3} value={"publicSafety"}>
              Public Safety
            </option>
            <option key={4} value={"prentisCafe"}>
              Prentis Cafe
            </option>
            <option key={5} value={"135thst"}>
              135th st
            </option>
          </select>
          <label>Weapon</label>
          <select name="tech2" onChange={handleInputChange}>
            {/* {techList.map((tech) => {
                return (
                  <option key={tech._id} value={tech.name}>
                    {tech.name}
                  </option>
                );
              })} */}
            <option key={6} value={"hello"}>
              Chancleta
            </option>
            <option key={7} value={"bye"}>
              Lightsaber
            </option>
            <option key={9} value={"night"}>
              Lead Pipe
            </option>
            <option key={10} value={"night"}>
              Lead Pipe
            </option>
            <option key={11} value={"night"}>
              Fists
            </option>
          </select>
          <button className="btn btn-danger" type="submit">
          Post
          </button>
        </form>

      </div>
  
    </div>
  );
};

export default Brawl;
