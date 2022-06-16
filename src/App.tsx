import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./component/HeaderComponent/HeaderComponent.lazy";
import GalleryComponent from "./component/GalleryComponent/GalleryComponent.lazy";

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
        <GalleryComponent></GalleryComponent>
    </div>
  );
}

export default App;
