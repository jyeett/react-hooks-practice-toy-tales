import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([]);
  // const [renderData, setRenderData] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => {
      setToyData(data)
      // setRenderData(data)
    })
  }, [])

  function newItem(dataForm) {
    setToyData([...toyData, dataForm])
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    const filteredData = toyData.filter(toy => toy.id !== id)
    setToyData(filteredData)
    // setRenderData(filteredData)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm newItem={newItem} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
