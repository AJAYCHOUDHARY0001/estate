import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { ChooseUs } from "./Components/ChooseUs";
import { OurFeatured } from "./Components/OurFeatured";
import SearchDetail from "./Components/SearchDetail";
import Loader from "./Components/Loader";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <SearchDetail />
      <ChooseUs />
      <OurFeatured />
      <Loader />
      <Testimonials />
    </>
  );
}

export default App;
