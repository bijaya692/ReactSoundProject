import React, { useState, useEffect } from "react";

export default function AnimalCard({ animal, onPlay, onDelete, onUpdate }) {
    if (!animal) return null;

    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(animal.name || "");
    const [soundUrl, setSoundUrl] = useState(animal.soundUrl || "");

    useEffect(() => {
        if (animal) {
            setName(animal.name || "");
            setSoundUrl(animal.soundUrl || "");
        }
    }, [animal]);

    function handleSave() {
        if (!name.trim() || !soundUrl.trim()) return;
        if (typeof onUpdate === "function") onUpdate(animal.id, { name, soundUrl });
        setEditing(false);
    }

    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                margin: "10px 0",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
            }}
        >
            {/* Play Icon */}
            <div
                style={{
                    cursor: "pointer",
                    fontSize: "30px",
                    textAlign: "center",
                    backgroundColor: "#fffae6",
                    padding: "10px",
                    borderRadius: "50%",
                    width: "50px",
                    margin: "0 auto 10px auto",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                }}
                onClick={() => onPlay && onPlay(soundUrl)}
            >
                🐾
            </div>

            {editing ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                    <input
                        value={soundUrl}
                        onChange={(e) => setSoundUrl(e.target.value)}
                        style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                </div>
            ) : (
                <>
                    <h3 style={{ textAlign: "center", margin: "10px 0 5px 0" }}>{name}</h3>
                    <small style={{ display: "block", textAlign: "center", color: "#555" }}>
                        {animal.createdAt ? new Date(animal.createdAt).toLocaleString() : ""}
                    </small>
                </>
            )}

            {/* Buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
                {editing ? (
                    <>
                        <button
                            onClick={handleSave}
                            style={{
                                padding: "5px 10px",
                                borderRadius: "5px",
                                border: "none",
                                backgroundColor: "#007bff",
                                color: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditing(false)}
                            style={{
                                padding: "5px 10px",
                                borderRadius: "5px",
                                border: "none",
                                backgroundColor: "#6c757d",
                                color: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setEditing(true)}
                            style={{
                                padding: "5px 10px",
                                borderRadius: "5px",
                                border: "none",
                                backgroundColor: "#28a745",
                                color: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete && onDelete(animal.id)}
                            style={{
                                padding: "5px 10px",
                                borderRadius: "5px",
                                border: "none",
                                backgroundColor: "#dc3545",
                                color: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}