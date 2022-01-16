import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import { getProducts } from "../../../data";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { buttonStyle } from "../../../styles/stylesVars";

const OtherEquips = (props) => {
    const equipData = getProducts()[0].equipements.slice(0, 4)
    const equipCard = equipData.map((equip, index) => {
        const equipImgStyle = {
            backgroundImage: `url(${equip.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundPosition: "center"
        }
        const equipStyle = {
            backgroundColor: "rgba(255,255,255, 0.8)",
            textAlign: "justify",
            padding: "10px"
        }
        return (
            <Grid sx={{ justifyContent: "center", marginBottom: "20px" }} item container xs={12} md={6} key={index}>
                <Grid className="equipsCardImg" item xs={12} md={6} sx={equipImgStyle}></Grid>
                <Grid item xs={12} md={6} sx={equipStyle}>
                    <Typography variant="h6" sx={{ marginBottom: "10px" }}>{equip.name}</Typography>
                    <Divider sx={{ marginBottom: "10px" }} />
                    <Typography>{equip.description}</Typography>
                    <Typography textAlign="center" fontWeight="bold">{equip.price}€</Typography>
                    <Box sx={{ display: 'flex', justifyContent: "center", marginTop: "10px" }}>
                        <Button onClick={() => props.addToCart(equip)} sx={buttonStyle} className="addCartBtn" variant="outlined" endIcon={<ShoppingCartOutlinedIcon className="iconBtn" />}>
                            Ajouter au panier
                        </Button>
                    </Box>
                </Grid>
            </Grid >
        )
    })

    return (
        <Container>
            <Grid container columnSpacing={1} sx={{ justifyContent: "space-between", marginTop: "20px" }}>
                {equipCard}
            </Grid>
        </Container>
    )
}

export default OtherEquips