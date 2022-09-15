import React from 'react';
import Header from './component/Header';
import "./styles/custom.scss";
import "./styles/nav.scss"
import "./styles/firstcontainer.scss"
import SecondContainer from './component/SecondContainer';
import ThirdContainer from './component/ThirdContainer';
import FourthContainer from './component/FourthContainer';
import Popular from './component/Popular';


const App = () => {
  return (
    <div>
  <Header/>
    <SecondContainer/>
    <ThirdContainer/>
    <FourthContainer/>
    <Popular/>
    </div>
  )
}

export default App