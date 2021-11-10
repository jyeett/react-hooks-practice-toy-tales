import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, handleDelete}) {
  const toys = toyData.map(toy => <ToyCard key={toy.id} toy={toy} handleDelete={handleDelete} />)
  return (
    <div id="toy-collection">{toys}</div>
  );
}

export default ToyContainer;
