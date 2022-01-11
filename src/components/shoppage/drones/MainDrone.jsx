import { Badge, Button, Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { getProducts } from "../../../data"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { buttonStyle } from "../../../styles/stylesVars";
const MainDrone = (props) => {
    const droneData = getProducts()[0].drones
    const mainDroneStyle = {
        backgroundImage: `url(${droneData[5].url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "400px",

    }

    const mainDroneDesc = {
        backgroundColor: "rgba(255,255,255, 0.7)",
    }

    const mainDroneTitle = {
        fontFamily: "'Rhodium Libre', 'serif'",
        marginTop: "15px"
    }

    return (
        <Container>
            <Grid sx={{ marginTop: "20px" }} container>
                <Grid sx={mainDroneStyle} item xs={12} md={6}></Grid>
                <Grid sx={mainDroneDesc} item xs={12} md={6}>
                    <Box sx={{ margin: "60px 0", textAlign: "center" }}>
                        <Badge variant="string" badgeContent="Nouveau" color="success">
                            <Typography sx={mainDroneTitle} variant="h5">{droneData[5].name}</Typography>
                        </Badge>
                    </Box>
                    <Box sx={{ textAlign: "justify" }}>
                        <Typography sx={{ padding: "0 20px" }}>{droneData[5].description}</Typography>
                        <Typography textAlign='center' sx={{ marginTop: "20px", fontWeight: "bold" }}>{droneData[5].price}€</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                        <Button onClick={() => props.addToCart(droneData[5])} sx={buttonStyle} className="addCartBtn" variant="outlined" endIcon={<ShoppingCartOutlinedIcon className="iconBtn" />}>
                            Ajouter au panier
                        </Button>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    )
}

export default MainDrone