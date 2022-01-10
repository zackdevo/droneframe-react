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
    const exist = this.state.cartItems.find(item => item.id === drone.id)
    if (exist) {
      this.setState({
        cartItems: this.state.cartItems.map((item) => item.id === drone.id ? { ...exist, qty: exist.qty + 1 } : item)
      })
    } else {
      this.setState({
        cartItems: [...this.state.cartItems, { ...drone, qty: 1 }]
      })
    }
  }
  // Fonction pour retirer du panier
  removeFromCart = (drone) => {
    const exist = this.state.cartItems.find(item => item.id === drone.id)
    if (exist.qty === 1) {
      this.setState({
        cartItems: this.state.cartItems.filter((item) => item.id !== drone.id)
      })
    } else {
      this.setState({
        cartItems: this.state.cartItems.map((item) => item.id === drone.id ? { ...exist, qty: exist.qty - 1 } : item)
      })
    }
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
        <Nav cartItems={this.state.cartItems} isLinkActive={this.isLinkActive} addToCart={this.addToCart} removeFromCart={this.removeFromCart} />
        <Routes>
          <Route index element={<Home addToCart={this.addToCart} />} />
          <Route path="shop" element={<Shop addToCart={this.addToCart} />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    )

  }
}

export default App
