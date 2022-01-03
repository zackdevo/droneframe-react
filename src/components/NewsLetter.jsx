import { Container, Grid, Typography } from "@mui/material";
import newsLetterImage from "../images/drone-10-min_auto_x2.jpg";
import NewsForm from "./NewsForm";

const NewsLetter = () => {

    const newsLetterStyle = {
        marginTop: "50px",
        backgroundImage: `url(${newsLetterImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        filter: "opacity(0.5)",
        height: "300px"
    }

    const newsFormStyle = {
        backgroundColor: "rgba(255, 255 ,255 , 0.95)",
        border: "solid 1px #c080c0 ",
        borderRadius: "15px",
        textAlign: 'center'
    }
    return (
        <Grid container sx={newsLetterStyle}>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
                <Grid sx={newsFormStyle} item xs={12} md={6}>
                    <Typography variant="h6" sx={{
                        fontFamily: "'Rhodium Libre', 'serif'",
                        fontWeight: "bold",
                        marginTop: "10px"
                    }}>Rejoignez la communauté DroneFrame !</Typography>
                    <NewsForm />
                </Grid>
            </Container >
        </Grid >
    )
}

export default NewsLetter