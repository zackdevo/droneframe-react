import { Container, Grid, Typography } from "@mui/material"
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import { Box } from "@mui/system"

const Reassurance = () => {

    const gridStyle = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    }
    const iconStyle = {
        fontSize: "70px",
        fill: "rgba(255,255,255, 0.8)"
    }
    const typoStyle = {
        color: "rgba(255,255,255, 0.8)"
    }
    return (
        <Box sx={{ marginTop: "20px", backgroundColor: "#4a2d4a" }}>
            <Container>
                <Grid container sx={{ padding: "10px 0" }}>
                    <Grid item xs={12} md={4} sx={gridStyle}>
                        <LocalShippingOutlinedIcon sx={iconStyle} />
                        <Typography sx={typoStyle}>Aucuns frais de livraison</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={gridStyle}>
                        <CreditCardOutlinedIcon sx={iconStyle} />
                        <Typography sx={typoStyle}>Paiement en 4 fois sans frais </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={gridStyle}>
                        <HeadsetMicOutlinedIcon sx={iconStyle} />
                        <Typography sx={typoStyle}>Support technique 7j/7</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Reassurance