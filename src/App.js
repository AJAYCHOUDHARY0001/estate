import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { ChooseUs } from "./Components/ChooseUs";
import { OurFeatured } from "./Components/OurFeatured";

function App() {
  return (
    <>
      {/* <Header /> */}
      <ChooseUs />
      <OurFeatured />
    </>
  );
}

export default App;
