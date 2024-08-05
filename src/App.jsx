import "./App.css";

function App() {
  const userName = "Matias";

  return (
    <>
      <div className="card">
        <p>
          Hello, <strong id="userName">{userName}</strong>!
        </p>
      </div>
    </>
  );
}

export default App;
