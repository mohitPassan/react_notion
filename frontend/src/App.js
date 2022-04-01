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
          <Chart area="cc" />
          <Chart area="b" />
          <Chart area="c1" />
          <Chart area="c2" />
          <Chart area="c3" />
          <Chart area="c4" />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
