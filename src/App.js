import './App.css';
import React, { useEffect} from "react";
import MainTable from './MainTable';

function App() {

  useEffect(() => {
    <MainTable/>
  })

  return (
    <div className="App">
      <h2> Basic data table</h2>
      <div>
        <MainTable/>
      </div>
    </div>
  );
}

export default App;
