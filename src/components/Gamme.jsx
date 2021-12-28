import { Container, Grid, Box } from "@mui/material"

const Gamme = () => {
    return (
        <Container>
            <Box sx={{ textAlign: "center" }}>
                <h2 style={{ fontFamily: "'Rhodium Libre', 'serif'" }}>Équipements &#38; et services</h2>
            </Box>
            <Grid container>
                <Grid item xs={12} md={6}>Hi</Grid>
                <Grid item xs={12} md={6}>Yea</Grid>
            </Grid>
        </Container>
    )
}

export default Gamme