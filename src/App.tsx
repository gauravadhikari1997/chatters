import { Container } from "react-bootstrap";
import { Route, BrowserRouter } from "react-router-dom";

//components
import { Header, Home } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Container>
          <Header />
          <Home />
        </Container>
      </Route>
    </BrowserRouter>
  );
}

export default App;
