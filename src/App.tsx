import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import { useState } from "react";
import './App.css';

function App () {
  const [ activePage, updatePage ] = useState('About Me');
  const pageNames = ['About Me', 'Portfolio', /*'Contact',*/ 'Resume'];
  const pages = [<AboutMe />, <Portfolio />, /*<Contact />,*/ <Resume />];

  return (
    <>
      <Navbar pageNames={pageNames} activePage={activePage} onSelectItem={updatePage} />
      {pages[pageNames.indexOf(activePage)]}
      <Footer />
    </>
  )
}

export default App;