import React from "react";
import ReactDOM from "react-dom/client";

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
const Title = () => (
  <a href="/">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbS295BL3xdJwXWwh7cTytVNtCwa-0r5TI9UviYdDmsnDk15ovoj2HcZlusgDiYkuo4o&usqp=CAU"
      alt="Logo"
      className="logo"
    />
  </a>
);
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <h1>Body Component</h1>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer">
      <h1>Footer Component</h1>
    </div>
  );
};
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
