import { Router, Route } from "@solidjs/router";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Packages from "./pages/Packages/Packages";
import Gallery from "./pages/Gallery/Gallery";
import Booking from "./pages/Booking/Booking";

import "./App.css";

function App() {
  return (
    <Router
      root={(props) => (
        <Layout>
          {props.children}
        </Layout>
      )}
    >
      <Route path="/" component={Home} />
      <Route path="/servicios" component={Services} />
      <Route path="/servicios/:id" component={ServiceDetail} />
      <Route path="/paquetes" component={Packages} />
      <Route path="/galeria" component={Gallery} />
      <Route path="/reservar" component={Booking} />
    </Router>
  );
}

export default App;