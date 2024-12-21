import React from "react"; // somebody export default thats why we import
import ReactDom from "react-dom/client";
import Head from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Head />
      <Body />
      <Footer />
    </div>
  );
};

const id = document.getElementById("root");
const root = ReactDom.createRoot(id);

root.render(<AppLayout />);
