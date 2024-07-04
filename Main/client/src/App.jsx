import './App.css';
import { Outlet } from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import mapBackground from './assets/images/Lets-hang.png';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='app'>
        <Navbar></Navbar>
        <div id="map-background" className='bg-fixed bg-cover bg-center' style={{ backgroundImage: `url(${mapBackground})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", height: "1000px" }}>
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
