import { Avatar, Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ReactDOM from "react-dom";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ModalCart = ({ isShowing, hide, cartItems, addToCart, removeFromCart }) => {

    const cartStyle = {
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        padding: "10px 0",
    }
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const cart = cartItems.map((item, id) => {

        return (
            <div>
                <Grid sx={cartStyle} container key={id}>
                    <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar sx={{ marginRight: "5px" }} variant="rounded" src={item.url}></Avatar>
                        <Typography>{item.name}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                        <IconButton className="removeBtn">
                            <RemoveCircleOutlineIcon onClick={() => removeFromCart(item)} />
                        </IconButton>
                        <IconButton className="addBtn" onClick={() => addToCart(item)} >
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: "center", display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                        <Typography sx={{ marginLeft: "10px" }}><strong>{item.price}€</strong></Typography>
                        <Typography>QTÉ : {item.qty}</Typography>
                    </Grid>
                </Grid >
            </div>
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
                            {cartItems.length !== 0 ? <Typography sx={{ textAlign: "center", marginTop: "5px" }}>Le prix total est de : <strong style={{ color: "#c080c0" }}>{totalPrice.toFixed(2)}€</strong></Typography> : null}
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