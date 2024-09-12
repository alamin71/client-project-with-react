import Banner from "./Components/Banner";
import Footer from "./Components/footer";
import Nav from "./Components/Navbar/Nav";
import PriceOptions from "./Components/PriceOptions";
import "./App.css";

function App() {
  return (
    <>
      <div className="content">
        <Nav></Nav>
        <Banner></Banner>
        <PriceOptions></PriceOptions>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
