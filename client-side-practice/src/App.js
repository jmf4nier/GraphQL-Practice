import React from 'react';
import Courses from './Courses'
import './App.css';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = ()=>(
  <ApolloProvider client={client}>
    <div>
      <h2>My first apollo react app</h2>
      <Courses/>
    </div>
  </ApolloProvider>
)


export default App;
