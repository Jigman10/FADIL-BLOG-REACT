import Navbar from "./navbar";
import Home from "./home";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
