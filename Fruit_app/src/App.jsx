import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/bodys/Navbar";
import Banner from "./components/bodys/Banner";
import Feature from "./components/bodys/Feature";
import Products from "./components/Pages/Products";
import Promotions from "./components/Pages/Promotions";
import Review from "./components/Pages/Review";
import About from "./components/Pages/About";
import Discount from "./components/Pages/Discount";
import OurNews from "./components/Pages/OurNews";
import Footer from "./components/bodys/Footer";
import Abouts from "./components/Tppages/Abouts";
import FruitNews from "./components/Tppages/FruitNews";
import OurTeam from "./components/Tppages/OurTeam";
import Shopbar from "./components/Tppages/Shopbar";
import Categories from "./components/ShopsT/Categories";
import Allp from "./components/Products1/Allp";
import Fruit from "./components/Products1/Fruit";
import Vegetable from "./components/Products1/Vegetable";
import Meat from "./components/Products1/Meat";
import Sponsore from "./components/Pages/Sponsore";
import Contacts from "./components/Tppages/Contacts";
import Messages from "./components/Pages/Messages";
import Location from "./components/Tppages/Location";
import Map from "./components/Pages/Map";
import Cart from "./components/Tppages/Cart";
import ProCart from "./components/ShopsT/ProCart";
import CheckOut from "./components/Tppages/CheckOut";
import BgCheckout from "./components/Pages/BgCheckout";




import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Mape from "./components/Pages/Map";




AOS.init();

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Banner />
              <Feature />
              <Products />
              <Promotions />
              <Review />
              <About />
              <Discount />
              <OurNews />
              <Sponsore />
              <Footer />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <Navbar />
              <Abouts />
              <FruitNews />
              <Discount />
              <OurTeam />
              <Review />
              <Sponsore />
              <Footer />
            </>
          }
        />
        <Route
          path="shop"
          element={
            <>
              <Navbar />
              <Shopbar />
              <Categories />
              <Allp />
              <Sponsore />
              <Footer />
            </>
          }
        />
        <Route
          path="fruit"
          element={
            <>
              <Navbar />
              <Shopbar />
              <Categories />
              <Fruit />
              <Sponsore />
              <Footer />
            </>
          }
        />
        <Route
          path="vegetable"
          element={
            <>
              <Navbar />
              <Shopbar />
              <Categories />
              <Vegetable />
              <Sponsore />
              <Footer />
            </>
          }
        />
        <Route
          path="meat"
          element={
            <>
              <Navbar />
              <Shopbar />
              <Categories />
              <Meat />
              <Sponsore />
              <Footer />
            </>
          }
        />
        <Route
          path="contacts"
          element={
            <>
              <Navbar />
              <Contacts />
              <Messages />
              <Location />
              <Map />
              <Footer />
            </>
          }
        />
        <Route
          path="cart"
          element={
            <>
              <Navbar />
              <Cart />
              <ProCart />
              <Sponsore />
              <Footer />
            </>
          }
        />
        <Route
          path="checkout"
          element={
            <>
              <Navbar />
              <CheckOut />
              <BgCheckout />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
