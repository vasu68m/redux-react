import "./App.css";
import User from "./User";

function App() {
  return (
    <div className="App">
      <h1>main component</h1>
      <User data={{ name: "jason todd", age: 26, email: "jtodd@gotham.com" }} />
    </div>
  );
}

export default App;
