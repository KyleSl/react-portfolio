import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { useState } from "react";
import './App.css';

function App () {
  const [ activePage, updatePage ] = useState('About Me');
  const pageNames = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <>
      <Navbar pageNames={pageNames} activePage={activePage} onSelectItem={updatePage} />
      <AboutMe />
      <Footer />
    </>
  )
}

export default App;