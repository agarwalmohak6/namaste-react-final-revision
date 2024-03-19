import React from "react";
import ReactDOM from "react-dom/client";
// Creating element using pure react
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Heading from React"
);
// Creating element using JSX
const headingJSX = <h1 id="heading">Heading from JSX</h1>;
// Single line Functional component
const Title = () => <h1>Title using Functional Component</h1>;
// Multi line Functional component
const HeadingComponent = () => (
  <div id="conatiner">
    {heading}
    {headingJSX}
    <Title />
    <h2>{10 + 20}</h2>
    <h1 className="heading">Heading using functional component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
