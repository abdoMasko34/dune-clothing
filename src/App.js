import Header from "./components/header/header.component";
import HomePage from "./components/homePage/homePage.components";
import ShopPage from "./components/shop/shop-page.component";
// import HatsPage from "./components/hatsPage/hatsPage.component";
// import SneakersPage from "./components/sneakers/sneakers.component";
// import JacketsPage from "./components/jackets/jackets.component";
// import ManPage from "./components/man/man.component";
// import WomenPage from "./components/women/women.component";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="/hats" element={<HatsPage />} />
        <Route path="/sneakers" element={<SneakersPage />} />
        <Route path="/jackets" element={<JacketsPage />} />
        <Route path="/man" element={<ManPage />} />
        <Route path="/women" element={<WomenPage />} /> */}
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
