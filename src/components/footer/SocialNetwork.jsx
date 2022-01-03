import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialNetwork = () => {
    const iconsStyle = {
        fill: "white",
        "&:hover": { fill: "#c080c0" },
        transition: "300ms",
        fontSize: 40
    }
    return (
        <Grid item xs={12} md={4} sx={{ padding: "20px", textAlign: "center" }}>
            <Typography sx={{ color: "white", fontSize: "1.1rem " }}>Rejoignez-nous sur nos réseaux sociaux</Typography>
            <Box sx={{ marginTop: "10px", display: "flex", justifyContent: "space-around" }} >
                <a href="http://" target="_blank" rel="noopener noreferrer" ><InstagramIcon sx={iconsStyle} /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer" ><TwitterIcon sx={iconsStyle} /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer" ><FacebookIcon sx={iconsStyle} /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer" ><YouTubeIcon sx={iconsStyle} /></a>
            </Box>
            <Typography sx={{ marginTop: "40px", color: "white", fontSize: "0.9rem" }}>DroneFrame© est une marque fictive. <br /> Site réalisé par Devoulx Zaccharie </Typography>
        </Grid>
    )
}
export default SocialNetwork