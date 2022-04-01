import Container from "./components/container";
import Nav from "./components/Nav";
import { ThemeProvider } from "styled-components";
import PieChart from "./components/icons/pieChart";

function App() {

  return (
    <ThemeProvider theme={{ color: "#388A85" }}>
      <div className="App">
        <Nav>
            <PieChart />
            <span>Records</span>
        </Nav>
      </div>
    </ThemeProvider>
  );
}

export default App;
