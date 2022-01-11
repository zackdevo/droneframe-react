import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import { Container, Divider, Grid, Typography } from "@mui/material";
import { iconGridStyle, iconStyle, typoStyle } from "../../styles/stylesVars";

const RepairSupport = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={2} sx={iconGridStyle}>
                    <BuildOutlinedIcon sx={iconStyle} />
                </Grid>
                <Grid item xs={12} md={10}>
                    <Typography sx={typoStyle}>
                        DroneFrame prend en charge toute réparations des drones ainsi que des équipements achetés. Votre satisfaction est notre priorité, c'est pourquoi notre service client prend est là pour réparer et/ou changer des pièces.
                    </Typography>
                </Grid>

            </Grid>
            <Divider sx={{ margin: "20px 0", borderColor: "rgba(0,0,0, 0.30)" }} />
        </Container>
    )
}

export default RepairSupport