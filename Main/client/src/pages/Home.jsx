import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import Navbar from "../components/Navbar";

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];

  return (
    <div> 
      <Navbar/>
      <div style={{ display: "flex" }}>
        <div className="card bg-white card-rounded w-50">
          <div className="card-header bg-dark text-center">
            <h1> Let's Hang</h1>
          </div>
          <div className="card-body m-5">
            <h2>Here is a list of locations you can vote on:</h2>
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
          </div>
          <div className="card-footer text-center m-3">
            <h2>Ready to create a new hang?</h2>
            <Link to="/matchup">
              <button className="btn btn-lg btn-danger">Hang!</button>
            </Link>
          </div>
        </div>

        <div className="card bg-white card-rounded w-50">
          <div className="card-header bg-dark text-center">
            <h1>Let's Brawl</h1>
          </div>
          <div className="card-body m-5">
            <h2>Here is a list of locations you can vote on:</h2>
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
          </div>
          <div className="card-footer text-center m-3">
            <h2>Ready to create a new hang?</h2>
            <Link to="/matchup">
              <button className="btn btn-lg btn-danger">Brawl!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
