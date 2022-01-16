import { Container, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import equipImage from "../../images/equipment2-min.jpg";
import serviceImage from "../../images/services-min.jpg";

const Gamme = () => {
    const catStyle = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        margin: "20px 0",
        height: "400px",
        display: "flex",
        position: "relative"
    }

    const overlayStyle = {
        alignItems: "center",
        display: "none",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        fontSize: "2rem",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        opacity: "0.7",
        position: "absolute",

    }
    return (
        <Container>
            <Box sx={{ textAlign: "center" }}>
                <h2 style={{ fontFamily: "'Rhodium Libre', 'serif'" }}>Équipements &#38; services</h2>
            </Box>
            <Grid sx={{ display: "flex", justifyContent: "center" }} container columnGap={7}>
                <Grid className="equipCat" sx={{ backgroundImage: `url(${equipImage})`, ...catStyle }} item xs={12} md={5}>
                    <Link to={"/shop#equip"}>
                        <Box sx={overlayStyle}>ÉQUIPEMENTS</Box>
                    </Link>
                </Grid>
                <Grid className="servicesCat" sx={{ backgroundImage: `url(${serviceImage})`, ...catStyle }} item xs={12} md={5}>
                    <Link to={"/assistance"}>
                        <Box sx={overlayStyle}>SERVICES</Box>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Gamme