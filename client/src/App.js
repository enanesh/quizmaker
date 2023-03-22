// import logo from './logo.svg';
//import './index.css';
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Section from "./components/pages/Section";
import Profile from "./components/pages/Profile";
import RenderQuiz from "./pages/RenderQuiz";
import BuildQuiz from "./pages/BuildQuiz";
import Renderquiz from "./components/pages/Renderquiz";
import { setContext } from "@apollo/client/link/context";
import Quizes from "./components/pages/Quizes";
import Footer from "./components/Footer";
import Login from "./components/Login";
import PasswordForm from "./components/PasswordForm";
import ProfileSettings from "./components/ProfileSettings";
import ResetPassword from "./components/NewPassword";
import NewPassword from "./components/NewPassword";
import AssignedQuizzes from "./components/AssignedQuizzes";
import CreatedQuizzes from "./components/CreatedQuizzes";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
    <ApolloProvider client={client}>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path='/quizes' element={<Quizes />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/renderquiz' element={<Renderquiz />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/password' element={<PasswordForm />} />
          <Route path='/settings' element={<ProfileSettings />} />
          <Route path='/newpassword/:resetLink' element={<NewPassword />} />
          <Route path='/assigned/:userID' element={<AssignedQuizzes />} />
          <Route path='/myquizzes/:userID' element={<CreatedQuizzes />} />
          {/* <Route path="/quiz" element={<RenderQuiz />} /> */}
          <Route path="/build" element={<BuildQuiz />} />
        </Routes>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
