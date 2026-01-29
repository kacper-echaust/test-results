import { PatronitesSections } from "./Components/PatronitesSection";
import { StartSection } from "./Components/StartSection";
import Footer from "./Components/layout/Footer/Footer";
import Header from "./Components/layout/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <StartSection />
      <PatronitesSections />
      <Footer />
    </>
  );
};

export { App };
