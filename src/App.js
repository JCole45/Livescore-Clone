import "./App.css"
import Header from "./components/Header"
import SportsTab from "./components/SportsTab"
import DateBar from "./components/DateBar"
import Fixtures from "./components/Fixtures"

function App() {
  return (
    <div className="App">
        <Header/>
        <SportsTab/>
        <DateBar/>
        
        <Fixtures/>
    </div>
  );
}

export default App;
