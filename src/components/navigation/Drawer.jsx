import { Container, Divider, IconButton, Badge } from "@mui/material"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box } from "@mui/system"
import logo from "../../images/logo2.png";
import { NavLink } from "react-router-dom";
import ModalCart from "./Modal";
import useModal from "./useModal";

const Drawer = (props) => {
    // Show Modal
    const { isShowing, toggle } = useModal();
    return (
        <Container sx={{ padding: "10px", height: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img style={{ width: "120px" }} src={logo} alt="Logo DroneFrame" />
                <IconButton onClick={() => { props.setIsShowed(false) }}>
                    <CloseOutlinedIcon sx={{ fontSize: 35 }} />
                </IconButton>
            </Box>
            <Divider sx={{ margin: "20px 0" }} />
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            }}>
                <ul style={{ listStyleType: "none", padding: '0', margin: "0" }}>
                    <li><NavLink className="navLinksRes fading-1" style={props.isLinkActive} to="/">Accueil</NavLink></li>
                    <li><NavLink className="navLinksRes fading-1" style={props.isLinkActive} to="/shop">Boutique</NavLink></li>
                    <li><NavLink className="navLinksRes fading-1" style={props.isLinkActive} to="/assistance">Assistance</NavLink></li>
                </ul>
                <IconButton className="cartBtn" aria-label="cart" onClick={toggle} >
                    <Badge badgeContent={props.hasItems ? props.total : null} color={props.hasItems ? "warning" : "success"}>
                        <ShoppingCartIcon sx={{ fontSize: 30 }} />
                    </Badge>
                </IconButton>
                <ModalCart cartItems={props.cartItems} isShowing={isShowing} hide={toggle} addToCart={props.addToCart} removeFromCart={props.removeFromCart} />
            </Box>
        </Container>
    )
}

export default Drawer