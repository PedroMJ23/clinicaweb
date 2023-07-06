import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Navbar/Nav";
import GlobalStylesCss from "./GlobalStyles/GlobalStyle";
import GlobalRoutes from "./Routes/GlobalRoutes";

function App() {
  return (
    <>
      <Nav />
      <GlobalRoutes />
      <Footer/>

      <GlobalStylesCss />
    </>
  );
}

export default App;
