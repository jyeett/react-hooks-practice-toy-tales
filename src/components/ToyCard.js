import React from "react";
import { useState } from "react/cjs/react.development";

function ToyCard({toy, handleDelete}) {
  const {id, name, image, likes} = toy
  const [numLikes, setNumLikes] = useState(likes)

  function handleLike() {
    // setNumLikes(() => numLikes + 1)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({likes: numLikes + 1})
    })
    .then(res => res.json())
    .then(setNumLikes(numLikes + 1))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{numLikes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDelete(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
