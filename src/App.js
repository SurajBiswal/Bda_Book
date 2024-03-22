import React, {useState} from 'react';
import './App.css';
import CardHolderOuter from './Components/CardHolderOuter';
import Heading from './Components/Heading';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import More from './Components/More';
import Footer from './Components/Footer';


function App() {
  const [numRows, setNumRows] = useState(3);
 // Initial number of rows

  const [height, setHeight] = useState(1200); // Initial height

  const handleShowMore = () => {
    setNumRows(numRows + 1); // Increase by 5 rows on each click
    setHeight(height + 372.16); // Increase height by 1200px
  };

  return (
    <div className="App">
      <Navbar className="nav"/>
      <Heading/>
      <Search/>
      <CardHolderOuter numRows={numRows} height={height}/>
      <More handleShowMore={handleShowMore}/>
      <Footer/>
    </div>
  );
}

export default App;
