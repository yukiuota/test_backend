import { useState } from 'react'
import './App.css'

function App() {
  const [hello, setHello] = useState<string | null>(null);

  const fetchHello = async () => {
    const response = await fetch ('http://localhost:3000/');
    const text = await response.text();
    setHello(text);
  };

  return (
    <>
      <button onClick={fetchHello}>あいさつする</button>
      {hello && <p>{hello}</p>}
    </>
  );

}

export default App;