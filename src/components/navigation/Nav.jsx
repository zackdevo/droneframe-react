import { Badge, Container, IconButton } from "@mui/material"
import { Box } from "@mui/system";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../../images/logo2.png";
import "../../styles/mainStyle.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import useModal from "./useModal";
import ModalCart from "./Modal";

const Nav = (props) => {
    const removeFromCart = props.removeFromCart;
    const addToCart = props.addToCart;
    // Syle lien actif
    const isLinkActive = props.isLinkActive;
    //Compteur du panier
    let hasItems;
    const cartItems = props.cartItems.map((items, index) => {
        return items
    })
    if (cartItems.length > 0) {
        hasItems = true;
    } else if (cartItems.length === 0) {
        hasItems = false
    }
    const total = cartItems.reduce((acc, obj) => { return acc + obj.qty; }, 0)

    // Style pour la navbar
    const navStyle = {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgba(223, 223, 223, 1)",
        boxShadow: "0 0.2rem 1rem rgba(0, 0, 0, .15)",
        position: "sticky",
        padding: "10px 0 0 0",
        top: "0px",
        zIndex: 5,
        width: "100%"
    }

    const iconsStyle = {
        "&:hover": { fill: "#c080c0" },
        transition: "300ms",
        fontSize: 30
    }

    // MODAL 

    const { isShowing, toggle } = useModal();
    return (

        <Box sx={{ ...navStyle }}>
            <Container sx={{
                display: "flex!important",
                justifyContent: "space-between"
            }}>
                <Box>
                    <Link to="/">
                        <img className="logo-site" alt="Logo DroneFrame" src={logo}></img>
                    </Link>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <NavLink className="navLinks fading-1" style={isLinkActive} to="/">Accueil</NavLink>
                    <NavLink className="navLinks fading-1" style={isLinkActive} to="/shop">Boutique</NavLink>
                    <NavLink className="navLinks fading-1" style={isLinkActive} to="/assistance">Assistance</NavLink>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <IconButton className="cartBtn" aria-label="cart" onClick={toggle} >
                        <Badge badgeContent={hasItems ? total : null} color={hasItems ? "warning" : "success"}>
                            <ShoppingCartIcon sx={iconsStyle} />
                        </Badge>
                    </IconButton>
                    <ModalCart cartItems={cartItems} isShowing={isShowing} hide={toggle} addToCart={addToCart} removeFromCart={removeFromCart} />
                </Box>
                <Outlet />
            </Container >
        </Box >

    )
}

export default Nav