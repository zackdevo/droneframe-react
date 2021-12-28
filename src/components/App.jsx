import "../styles/mainStyle.css";
import { Component } from "react";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/home";
import Shop from "../pages/shop";
import Footer from "./Footer";

class App extends Component {
  state = {
    cartItems: [{
      id: "3",
      drone: "1",
      price: 258,
    }, {
      id: "4",
      drone: "2",
      price: 1455,
    }
    ]
  }
  // Fonction pour ajouter au panier
  AddToCard = (product) => {
    const exist = this.state.cartItems.find(x => x.id === product.id);
    if (exist) {
      this.setState({
        cartItems: [...this.state.cartItems, product]
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
        <Nav cartItems={this.state.cartItems} isLinkActive={this.isLinkActive} />
        <Routes>
          <Route index element={<Home addToCart={this.AddToCard} />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    )

  }
}

export default App
