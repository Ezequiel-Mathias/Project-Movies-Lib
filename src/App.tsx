import { Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar"
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet/>
    </div>
  );
}

export default App;
