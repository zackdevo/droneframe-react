import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import { getProducts } from "../../../data";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { buttonStyle } from "../../../styles/stylesVars";

const OtherDrones = (props) => {

    const droneData = getProducts()[0].drones.slice(0, 5)
    const droneCard = droneData.map((drone, index) => {
        const dronesImgStyle = {
            backgroundImage: `url(${drone.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }

        const dronesStyle = {
            backgroundColor: "rgba(255,255,255, 0.8)",
            textAlign: "justify",
            padding: "10px"
        }
        return (
            <Grid sx={{ justifyContent: "center", marginBottom: "20px" }} container item xs={12} md={6} key={index}>
                <Grid className="dronesCardImg" item xs={12} md={6} sx={dronesImgStyle}></Grid>
                <Grid item xs={12} md={6} sx={dronesStyle}>
                    <Typography variant="h6" sx={{ marginBottom: "10px" }}>{drone.name}</Typography>
                    <Divider sx={{ marginBottom: "10px" }} />
                    <Typography>{drone.description}</Typography>
                    <Typography textAlign="center" fontWeight="bold">{drone.price}€</Typography>
                    <Box sx={{ display: 'flex', justifyContent: "center", marginTop: "10px" }}>
                        <Button onClick={() => props.addToCart(drone)} sx={buttonStyle} className="addCartBtn" variant="outlined" endIcon={<ShoppingCartOutlinedIcon className="iconBtn" />}>
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
                {droneCard}
            </Grid>
        </Container>
    )
}

export default OtherDrones