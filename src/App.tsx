import Navbar from "./components/Navbar";
import { useState } from "react";
import './App.css';

function App () {
  const [ activePage, updatePage ] = useState('About Me');
  const pageNames = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <>
      <Navbar pageNames={pageNames} activePage={activePage} onSelectItem={updatePage}/>
    </>
  )
}

export default App;