import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const sendPrompt = async () => {
    const res = await fetch("http://localhost:8000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="container">
      <h1>AI Chat</h1>
      <input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter a prompt..." />
      <button onClick={sendPrompt}>Submit</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;
