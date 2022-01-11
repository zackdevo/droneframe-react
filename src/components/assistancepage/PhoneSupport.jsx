import { Container, Divider, Grid, Typography } from "@mui/material"
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import { iconGridStyle, iconStyle, typoStyle } from "../../styles/stylesVars";

const PhoneSupport = () => {

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={2} sx={iconGridStyle}>
                    <HeadsetMicOutlinedIcon sx={iconStyle} />
                </Grid>
                <Grid item xs={12} md={10}>
                    <Typography sx={typoStyle}>
                        Nous sommes disponibles pour vous accompagner via notre hot-line au 0101. Nos agents répondront à toutes vos questions concernant les produits DroneFrame.
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ margin: "20px 0", borderColor: "rgba(0,0,0, 0.30)" }} />
        </Container>
    )
}

export default PhoneSupport