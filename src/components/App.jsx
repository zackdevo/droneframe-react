import "../styles/mainStyle.css";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/home";
import Shop from "../pages/shop";
import Footer from "./footer/Footer";
import Nav from "./navigation/Nav";

class App extends Component {
  state = {
    cartItems: []
  }
  // Fonction pour ajouter au panier
  addToCart = (drone) => {
    this.setState({
      cartItems: [...this.state.cartItems, drone]
    })
  }
  // Fonction pour classe active sur les liens
  isLinkActive = ({ isActive }) => {
    return {
      color: isActive ? "#c080c0" : ""
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Nav cartItems={this.state.cartItems} isLinkActive={this.isLinkActive} />
        <Routes>
          <Route index element={<Home addToCart={this.addToCart} />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    )

  }
}

export default App
