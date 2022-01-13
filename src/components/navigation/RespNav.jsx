import { Box } from "@mui/system"
import { useState } from "react";
import Drawer from "./Drawer";
import Classic from "./Classic";

const RespNav = (props) => {
    const removeFromCart = props.removeFromCart;
    const addToCart = props.addToCart;
    // Style lien actif
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

    // Style
    const navStyle = {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgba(223, 223, 223, 1)",
        boxShadow: "0 0.2rem 1rem rgba(0, 0, 0, .15)",
        position: "sticky",
        top: "0px",
        zIndex: 5,
        width: "100%",
        alignItems: "center",
    }

    const [isShowed, setIsShowed] = useState(false);
    return (
        <Box sx={navStyle}>
            {isShowed ? <Drawer
                isShowed={isShowed}
                setIsShowed={setIsShowed}
                isLinkActive={isLinkActive}
                total={total}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                hasItems={hasItems}
                cartItems={cartItems}
            />
                : <Classic isShowed={isShowed} setIsShowed={setIsShowed} />}
        </Box>
    )
}

export default RespNav