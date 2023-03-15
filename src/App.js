import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { ChooseUs } from "./Components/ChooseUs";
import { OurFeatured } from "./Components/OurFeatured";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <ChooseUs />
      <OurFeatured />
      <Testimonials />
    </>
  );
}

export default App;
