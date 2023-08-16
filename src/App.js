import Navbar from "./Components/Navbar/Navbar";
import HealthCare from "./Components/HealthCareSection/HealthCareSection";
import Services from "./Components/OurServices/Services";
import HealthProvider from "./Components/Leading healthcare providers/HealthProvider";
import CardSlider from "./Components/CardSlider/CardSlider";
import LatestArticle from "./Components/LatestArticle/LatestArticle";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HealthCare />
      <Services />
      <HealthProvider />
      <CardSlider />
      <LatestArticle />
      <Footer />
    </>
  );
}

export default App;
