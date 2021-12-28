import { Badge, Container, IconButton } from "@mui/material"
import { Box } from "@mui/system";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../images/logo2.png";
import "../styles/mainStyle.css";
import { NavLink, Outlet } from "react-router-dom";
import NavSearch from "./NavSearch";

const Nav = (props) => {
    const isLinkActive = props.isLinkActive;
    //Compteur du panier
    let hasItems;
    const cartItems = props.cartItems.map((items, index) => {
        console.log(items);
        return items
    })
    if (cartItems.length > 0) {
        hasItems = true;
    } else if (cartItems.length === 0) {
        hasItems = false
    }
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
    return (

        <Box sx={{ ...navStyle }}>
            <Container sx={{
                display: "flex!important",
                justifyContent: "space-between"
            }}>
                <Box>
                    <img className="logo-site" alt="Logo DroneFrame" src={logo}></img>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <NavLink className="navLinks fading-1" style={isLinkActive} to="/">Accueil</NavLink>
                    <NavLink className="navLinks fading-1" style={isLinkActive} to="/shop">Boutique</NavLink>
                    <NavLink className="navLinks fading-1" style={isLinkActive} to="/blank">Assistance</NavLink>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>

                    <NavSearch />
                    <IconButton aria-label="cart">
                        <Badge badgeContent={hasItems ? cartItems.length : null} color={hasItems ? "warning" : "success"}>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Box>
                <Outlet />
            </Container >
        </Box >

    )
}

export default Nav