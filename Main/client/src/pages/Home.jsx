import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_HANGS} from '../utils/queries';
// import Navbar from "../components/Navbar";
import "../css/homepage.css"



const Home = () => {
  // const { loading, data } = useQuery(QUERY_HANGS, {
  //   fetchPolicy: "no-cache"
  // });

  // const matchupList = data?.matchups || [];

  return (
    <>
    <div className="homepage-cards">
      <div className="card bg-white card-rounded w-50" style={{ height: '500px' }}>
        <div className="card-header bg-dark text-center">
          
        </div>
        <div className='brawl-image m-5 text-center'>
         </div>
        {/* <div className="card-body m-5">
           {loading ? (
            <div>Loading...</div>
          ) : (
            <ul className="square">
              {matchupList.map((matchup) => {
                return (
                  <li key={matchup._id}>
                    <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                      {matchup.tech1} vs. {matchup.tech2}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )} 
        </div> */}
        <div className="card-footer text-center m-5">
          <h2>Ready to Brawl?</h2>
          <Link to="/matchup">
            <button className="btn btn-lg btn-danger">Let's Brawl!</button>
          </Link>
        </div>
      </div>

      <div className="card bg-white card-rounded w-50" style={{ height: '500px' }}>
        <div className="card-header bg-dark text-center">
          
        </div>
        <div className='hang-image m-5 text-center'>
          <img src='https://i.etsystatic.com/27832863/r/il/235ba8/4020975763/il_fullxfull.4020975763_8slx.jpg' height={205} width={173}></img>
        </div>
        {/* <div className="card-body m-2">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul className="square">
              {matchupList.map((matchup) => {
                return (
                  <li key={matchup._id}>
                    <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                      {matchup.tech1} vs. {matchup.tech2}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div> */}
        <div className="card-footer text-center m-5">
          <h2>Ready to Hang?</h2>
          <Link to="/matchup">
            <button className="btn btn-lg btn-danger">Let's Hang!</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
