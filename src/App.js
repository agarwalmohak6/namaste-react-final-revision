import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";

// Food Villa Begins
/**
    header
      -logo
      -nav items
      -cart
    body
      -search bar
      -restaurant list
        -restaurant image
        -name
        -rating
        -cuisines
    footer
      -links
      -copyright
  */

const AppLayout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Body />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
              </>
            }
          />
          <Route
            path="/restaurant/:resId"
            element={
              <>
                <Header />
                <RestaurantMenu />
              </>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);
