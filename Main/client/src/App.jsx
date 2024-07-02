import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import mapBackground from './assets/images/Lets-hang.png';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="map-background" className='bg-fixed bg-cover bg-center' style={{backgroundImage:`url(${mapBackground})`, backgroundSize:"100% auto", backgroundRepeat: "no-repeat", height: "1000px"}}>
    <Outlet />
      </div>
  
    </ApolloProvider>
  );
}

export default App;
