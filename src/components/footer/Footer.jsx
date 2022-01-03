import { Container, Grid } from "@mui/material";
import FooterAccordion from "./FooterAccordion";
import FooterLogo from "./FooterLogo";
import SocialNetwork from "./SocialNetwork";

const Footer = () => {

    const footerStyle = {
        backgroundColor: "#604060",
        marginTop: "40px"
    }

    return (
        <Grid container sx={footerStyle}>
            <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                <FooterAccordion />
                <FooterLogo />
                <SocialNetwork />
            </Container >
        </Grid >
    )
}

export default Footer