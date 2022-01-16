import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import FooterAccordion from "./FooterAccordion";
import FooterLogo from "./FooterLogo";
import SocialNetwork from "./SocialNetwork";

const Footer = () => {

    const footerStyle = {
        backgroundColor: "#604060"
    }

    return (
        <Box sx={footerStyle}>
            <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                <Grid container>
                    <FooterAccordion />
                    <FooterLogo />
                    <SocialNetwork />
                </Grid>
            </Container >
        </Box>
    )
}

export default Footer