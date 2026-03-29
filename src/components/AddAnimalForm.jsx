import React, { useState } from "react";

export default function AddAnimalForm({ onAdd }) {
  const [name, setName] = useState("");
  const [soundUrl, setSoundUrl] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let finalSound = soundUrl;

    // Auto-assign sound for cat or dog
    if (!finalSound) {
      if (name.toLowerCase() === "cat") finalSound = "/sounds/meow.mp3";
      if (name.toLowerCase() === "dog") finalSound = "/sounds/bark.mp3";
    }

    if (!name.trim() || !finalSound) {
      setError("Name and sound are required");
      return;
    }

    const newAnimal = {
      id: Date.now().toString(),
      name: name.trim(),
      soundUrl: finalSound,
      createdAt: Date.now(),
    };

    if (finalSound) new Audio(finalSound).play();

    if (typeof onAdd === "function") onAdd(newAnimal);

    setName("");
    setSoundUrl("");
    setError("");
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <input
          placeholder="Animal name (cat, dog)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          placeholder="Sound path (optional)"
          value={soundUrl}
          onChange={(e) => setSoundUrl(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 15px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Add Animal
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}