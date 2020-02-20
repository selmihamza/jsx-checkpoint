import React from 'react';
import imageInSrc from './imageInSrc.jpg';
import './App.css';
import './style.css'

function App() {
  let myName = <span>hamza</span>
  let title = (<p className="title">Your name here : {myName}</p>);
  let imageInpublic = <img className="img" src="/imageInPublic.jpg" alt="imageInpublic"/>
  let image= <img className="img" src={imageInSrc} alt="imageInSrc"/>
  return (
    <div className="App">
      {title}
      {imageInpublic}
      {image}
    </div>
  );
}

export default App;
