import { Container, Box, Grid, Typography, Divider, Button } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getProducts } from "../../data"
import { buttonStyle } from "../../styles/stylesVars";

const BestSells = (props) => {
    // GROSSE PARTIE STYLE DES ELEMENTS OUAI

    const imgStyle = {
        maxWidth: "100%",
        borderRadius: "0% 0% 30% 30%",
        width: "100 %",
    }
    const cardStyle = {
        border: "1px solid rgba(125, 119, 114, 0.3)",
        borderRadius: "0% 0% 10% 10%",
        textAlign: "center",
        transition: "1.1s",
        maxWidth: "100%!important"
    }

    // Data des drones
    const bestDrones = getProducts()[0].drones.slice(0, 4);
    const cards = bestDrones.map((drone, index) => {
        return (
            <Grid className="card" sx={cardStyle} key={index} item xs={6} md={2.5}>
                <img style={imgStyle} src={drone.url} alt={drone.name}></img>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h6">{drone.name}</Typography>
                </Box >
                <Divider sx={{ height: "10px", marginBottom: "5px" }} />
                <Box>
                    <Typography paragraph>{drone.description}</Typography>
                    <Typography paragraph sx={{ fontWeight: "bold" }}>{drone.price}€</Typography>
                </Box>
                <Box>
                    <Button sx={buttonStyle} className="addCartBtn" variant="outlined" endIcon={<ArrowForwardIosIcon className="iconBtn" />}>
                        Voir fiche produit
                    </Button>
                    <Button onClick={() => props.addToCart(drone)} sx={buttonStyle} className="addCartBtn" variant="outlined" endIcon={<ShoppingCartOutlinedIcon className="iconBtn" />}>
                        Ajouter au panier
                    </Button>

                </Box>
            </Grid >
        )
    })

    return (
        <Container>
            <Box sx={{ textAlign: "center" }}>
                <h2 style={{ fontFamily: "'Rhodium Libre', 'serif'" }}>Meilleures Ventes</h2>
            </Box>
            <Grid container sx={{ display: "flex", justifyContent: "center" }} columnGap={5}>
                {cards}
            </Grid>
        </Container >
    )
}

export default BestSells