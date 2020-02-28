import React from 'react';
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Header/>
      <Main/>  
      <Footer/>  
    </Container>
  );
}

export default App;
