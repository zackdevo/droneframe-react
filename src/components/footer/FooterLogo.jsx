import { Grid } from "@mui/material";
import logoFooter from "../../images/logob.png";

const FooterLogo = () => {
    const logoStyle = {
        maxWidth: "100%",
        width: "200px"
    }
    return (
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img style={logoStyle} src={logoFooter} alt="Logo DroneFrame" />
        </Grid>
    )
}

export default FooterLogo