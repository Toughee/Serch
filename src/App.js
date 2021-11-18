import './App.css';
        

function App() {
  return (
    <div className="App">
      <header>
        <h1><span className="AppLogo">🔍</span>Serch</h1>
        </header>

        <br/>

        <section className="SearchBarStyle">
          <input 
            placeholder="Serch"
            maxlength="25"
          />
          <button>
            look
          </button>

      <aside className="QueryResult">
        <h2>...</h2>
        <p>...</p>
      </aside>

      </section>

    </div>
  );
}

export default App;
