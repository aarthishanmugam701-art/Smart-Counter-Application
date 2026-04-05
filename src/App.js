import React, { useState, useEffect } from "react";

function App() {
  const max = 1000;
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    if (count >= max) {
      alert("Maximum limit reached");
      return;
    }
    setCount(count + step);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - step);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const getColor = () => {
    if (count === 0) return "red";
    return  "white";
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    const saved = localStorage.getItem("count");
    if (saved) setCount(Number(saved));
  }, []);

  return (
  <div style={styles.body}>
     <header style={styles.header}>
      <h1>Smart Counter</h1>
    </header>
    <div style={styles.card}>
      

      <h2 style={{ ...styles.count, color: getColor() }}>{count}</h2>

      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        style={styles.input}
      />

      <div style={styles.buttonGroup}>
        <button onClick={decrement} style={styles.btn}>-</button>
        <button onClick={increment} style={styles.btn}>+</button>
        <button onClick={reset} style={styles.reset}>Reset</button>
      </div>

      {count === 0 && <p>Minimum limit reached</p>}
      {count > 500 && <p>Great! Keep going </p>}
      {count === 1000 && <p>Goal Achieved </p>}
    </div>

    <footer style={styles.footer}>
      <p>© 2026 Smart Counter | Keep Counting</p>
    </footer>

  </div>
);
}

export default App;

const styles = {
  body: {
  minHeight: "100vh",
  
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(rgb(4, 121, 136))",
  position: "relative"
},
  card: {
  width: "90%",          
  maxWidth: "300px",     
  background: "rgb(72, 167, 180)",
  backdropFilter: "blur(10px)",
  padding: "40px",
  borderRadius: "20px",
  textAlign: "center",
  color: "white",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
},
  title: {
    fontSize: "30px"
  },
  count: {
    fontSize: "60px",
    margin: "20px 0"
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    marginBottom: "15px"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px"
  },
  btn: {
    padding: "10px 15px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer"
  },
  reset: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    background: "red",
    color: "white",
    cursor: "pointer"
  },
  footer: {
  position: "absolute",
  bottom: "10px",
  textAlign: "center",
  color: "white",
  },
  header: {
  position: "absolute",
  top: "0",
  width: "100%",
  padding: "15px",
  textAlign: "center",
  background: "rgba(0,0,0,0.2)",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold"
},
};