import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { ChooseUs } from "./Components/ChooseUs";
import { OurFeatured } from "./Components/OurFeatured";
import Testimonials from "./Components/Testimonials";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <ChooseUs />
      <OurFeatured />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
