import { Badge, Button, Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { getProducts } from "../../../data"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { buttonStyle } from "../../../styles/stylesVars";

const MainEquip = (props) => {
    const equipData = getProducts()[0].equipements
    const mainEquipStyle = {
        backgroundImage: `url(${equipData[4].url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }

    const mainEquipDesc = {
        backgroundColor: "rgba(255,255,255, 0.7)",
    }

    const mainEquipTitle = {
        fontFamily: "'Rhodium Libre', 'serif'",
        marginTop: "15px"
    }
    return (
        <Container id="equip">
            <Grid sx={{ marginTop: "20px" }} container>
                <Grid sx={mainEquipDesc} item xs={12} md={6}>
                    <Box sx={{ margin: "40px 0", textAlign: "center" }}>
                        <Badge sx={{ top: "10px", right: "-20px" }} variant="string" badgeContent="Nouveau" color="success">
                            <Typography sx={mainEquipTitle} variant="h5">{equipData[4].name}</Typography>
                        </Badge>
                    </Box>
                    <Box sx={{ textAlign: "justify" }}>
                        <Typography sx={{ padding: "0 20px" }}>{equipData[4].description}</Typography>
                        <Typography textAlign='center' sx={{ marginTop: "20px", fontWeight: "bold" }}>{equipData[4].price}€</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                        <Button onClick={() => props.addToCart(equipData[4])} sx={buttonStyle} className="addCartBtn" variant="outlined" endIcon={<ShoppingCartOutlinedIcon className="iconBtn" />}>
                            Ajouter au panier
                        </Button>
                    </Box>

                </Grid>
                <Grid className="mainEquipImg" sx={mainEquipStyle} item xs={12} md={6}></Grid>
            </Grid>
        </Container>
    )
}

export default MainEquip