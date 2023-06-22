import "./App.css";
// import User from "./User";
// import Home from "./components/Home";
import HomeContainer from "./containers/HomeContainer";

function App() {
  return (
    <div className="App">
      <h1>main component</h1>
      {/* <Home /> */}
      {/* <User data={{ name: "jason todd", age: 26, email: "jtodd@gotham.com" }} /> */}
      <HomeContainer />
    </div>
  );
}

export default App;
