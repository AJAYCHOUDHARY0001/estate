import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { ChooseUs } from "./Components/ChooseUs";
import { OurFeatured } from "./Components/OurFeatured";
import SearchDetail from "./Components/SearchDetail";
import Loader from "./Components/Loader";
import Testimonials from "./Components/Testimonials";
import { HowItWork } from "./Components/HowItWork";
import { Footer } from "./Components/Footer";
import BackToTop from "./Components/BackToTop";

function App() {
  return (
    <>
      <Header />
      <SearchDetail />
      <HowItWork />
      <ChooseUs />
      <OurFeatured />
      <Loader />
      <Testimonials />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
