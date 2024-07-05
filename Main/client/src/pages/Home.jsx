import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_HANGS} from '../utils/queries';
import brawlimage from '../assets/images/brawlimagefist-KV.png';
import hangimage from '../assets/images/hangimagefist-kv.webp';
import Navbar from "../components/Navbar";
import "../css/homepage.css"



const Home = () => {
  const { loading, data } = useQuery(QUERY_HANGS, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];

  return (
    <>
    <div className="homepage-cards">
      <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
          
        </div>
        <div className='brawl-image m-5 text-center'>
          <img src={brawlimage} width={149}></img>
        </div>
        <div className="card-body m-5">
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
          <h2>Ready to Brawl?</h2>
          <Link to="/matchup">
            <button className="btn btn-lg btn-danger">Let's Brawl!</button>
          </Link>
        </div>
      </div>

      <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
          
        </div>
        <div className='hang-image m-5 text-center'>
          <img src={hangimage} width={173}></img>
        </div>
        <div className="card-body m-2">
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
