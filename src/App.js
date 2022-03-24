import './App.css';
import React, { useEffect} from "react";
import MainTable from './MainTable';
import BasicTable from './tabexperiment';

function App() {

  useEffect(() => {
    <MainTable/>
  })

  return (
    <div className="App">
      <h2 className="Title"> Game Search </h2>
      <div className="Table panel">
        <MainTable/>
        <BasicTable/>
      </div>
    </div>
  );
}

export default App;
