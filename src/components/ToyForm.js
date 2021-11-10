import React from "react";
import { useState } from "react/cjs/react.development";

function ToyForm({newItem}) {
  const [dataForm, setDataForm] = useState({
    name: '',
    image: '',
    likes: 0
  })

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dataForm)
    })
    .then(res => res.json())
    .then(data => newItem(data))
  }

  function handleChange(e) {
    setDataForm({...dataForm, [e.target.name]: e.target.value})
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e) => handleSubmit(e)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={dataForm.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          name="image"
          value={dataForm.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
