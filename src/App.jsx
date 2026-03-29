import React, { useState } from "react";
import AddAnimalForm from "./components/AddAnimalForm";
import AnimalCard from "./components/AnimalCard";

export default function App() {
  const [animals, setAnimals] = useState([]);

  function handleAdd(newAnimal) {
    setAnimals([...animals, newAnimal]);
  }

  function handleDelete(id) {
    setAnimals(animals.filter((a) => a.id !== id));
  }

  function handleUpdate(id, data) {
    setAnimals(
      animals.map((a) => (a.id === id ? { ...a, ...data } : a))
    );
  }

  function handlePlay(url) {
    if (url) new Audio(url).play();
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Animal App</h1>

      <AddAnimalForm onAdd={handleAdd} />

      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          onPlay={handlePlay}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}