import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import { getProducts } from "../../../data";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import buttonStyle from "../../../styles/buttonStyle";

const OtherEquips = (props) => {
    const equipData = getProducts()[0].equipements.slice(0, 4)
    const equipCard = equipData.map((equip, index) => {
        return (
            <Grid sx={{ justifyContent: "center", marginBottom: "10px" }} item container xs={6} key={index}>
                <Grid item xs={6} sx={{ backgroundImage: `url(${equip.url})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></Grid>
                <Grid item xs={6} sx={{ backgroundColor: "rgba(255,255,255, 0.8)", textAlign: "justify", padding: "10px" }}>
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