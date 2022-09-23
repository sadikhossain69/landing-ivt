import CardSection from "./components/CardSection";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      {/* <Drawer/> */}
      <CardSection />
    </>
  );
}

export default App;
