import React from 'react';
import Home from './Home';
import Chat from './Chat';
import Navbar from './Navbar';
import "./styling/App.css";
import Services from './Services';
import About from './About';
import Team from './Team';
import Footer from './Footer';


function App() {


  return (
      <main className="App">
        <Navbar />
        <Home />
        <Chat />
        <Services />
        <About />
        <Team />
        <Footer />
      </main>
  );
}

export default App;
