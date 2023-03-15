// import logo from './logo.svg';
//import './index.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
   
    <ApolloProvider  client ={client}>
    <Router>
     <Navbar />
     {/* <Routes>
       <Route exact path='/' element={</>} />
       <Route exact path='/saved' element={< />} />
       <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
     </Routes> */}
    </Router>
    </ApolloProvider>   

  );
}

export default App;
