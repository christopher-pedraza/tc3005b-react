import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content, Suma } from "./Content";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Content texto="Hola mundo, quieres sumar?" />
      <Suma />
      <Content texto="Adios mundo" />
      <Footer />
    </div>
  );
}

export default HomePage;
