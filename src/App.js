import logo from "./assets/logo.png";

import Project from "./Project.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="Bookwala LOGO" />
      </div>
      <div className="Content">
        <div className="left">
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
