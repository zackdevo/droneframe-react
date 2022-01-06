import { Avatar, Button, Divider, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import ReactDOM from "react-dom";
import CloseIcon from '@mui/icons-material/Close';

const ModalCart = ({ isShowing, hide, cartItems }) => {

    const cartStyle = {
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        padding: "10px 0",
    }

    const cart = cartItems.map((item, index) => {
        return (
            <Grid sx={cartStyle} container key={index}>
                <Grid item xs={12} md={4} sx={{ display: "flex" }}>
                    <Avatar variant="rounded" src={item.url}></Avatar>
                    <Typography>{item.name}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button sx={{ backgroundColor: "red" }}>-</Button>
                    <Button sx={{ backgroundColor: "blue" }}>+</Button>
                </Grid>
                <Grid item xs={12} md={4}>{item.price}€ QTY : {item.qty}</Grid>
            </Grid >
        )
    })

    //STYLE MODAL

    const modalOverlay = {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "1040",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    }

    const modalWrapper = {
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1050",
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        outline: "0",
        display: "flex",
        alignItems: "center",
    }

    const modalStyle = {
        zIndex: "100",
        background: "#fff",
        position: "relative",
        margin: "auto",
        borderRadius: "5px",
        maxWidth: "500px",
        width: "80%",
        padding: "1rem",
    }

    const modalHeader = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const iconsStyle = {
        fill: "rgba(125, 119, 114, 0.8)",
        "&:hover": { fill: "#c080c0" },
        transition: "300ms",
        fontSize: 30
    }

    if (isShowing) {
        return ((ReactDOM.createPortal(
            <Box sx={modalOverlay}>
                <Box sx={modalWrapper}>
                    <Box sx={modalStyle}>
                        <Box sx={modalHeader}>
                            <Typography variant="h6">Votre Panier</Typography>
                            <Button onClick={hide}><CloseIcon fontSize="large" sx={iconsStyle} /></Button>
                        </Box>
                        <Divider sx={{ margin: "10px 0" }}></Divider>
                        <Box sx={{ display: "block" }}>
                            {cartItems.length === 0 ? <p>Votre panier est vide.</p> : cart}
                        </Box>
                    </Box>
                </Box>
            </Box>, document.body
        )))
    } else {
        return null
    }
}

export default ModalCart