import './App.css';
//import Bootstrap from "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">

      <nav className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
       
        <h1 style = {{color: "white"}}><i>Blockchain@LUC</i></h1>
       
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Education</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">About</a>
                </li>
              </ul>
            </div>
          </div>

      </nav>

    </div>
  );
}

export default App;
