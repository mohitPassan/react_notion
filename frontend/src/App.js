import Container from "./components/container";
import Nav from "./components/Nav";
import { ThemeProvider } from "styled-components";
import PieChart from "./components/icons/pieChart";
import Chart from "./components/chart";

function App() {

  return (
    <ThemeProvider theme={{ color: "#388A85" }}>
      <div className="App">
        <Nav>
            <PieChart />
            <span>Records</span>
        </Nav>
        <Container>
          <Chart area="chart1" />
          <Chart area="chart2" />
          <Chart area="chart3" />
          <Chart area="chart4" />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
