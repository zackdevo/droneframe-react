import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { Box } from "@mui/system";

const FooterAccordion = () => {
    const accordionStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "white"
    }

    const detailsStyle = {
        borderTop: "solid 1px #c080c0",
        backgroundColor: "white",
        borderRadius: "0 0 5px 5px"
    }

    const iconsStyle = {
        fill: "grey",
        "&:hover": { fill: "#c080c0" },
        transition: "300ms"
    }
    return (
        <Grid item xs={12} md={4} sx={{ padding: "20px" }}>
            <Accordion sx={accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>CVG</Typography>
                </AccordionSummary>
                <AccordionDetails sx={detailsStyle}>
                    <Typography sx={{ color: "rgba(125, 119, 114, 1)" }}>
                        T'a vraiment cliqué sur ça ? Wow.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Mention Légales</Typography>
                </AccordionSummary>
                <AccordionDetails sx={detailsStyle}>
                    <Typography sx={{ color: "rgba(125, 119, 114, 1)" }}>
                        Genre t'a eu envie de lire ça ? Eh beh..
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Qui sommes nous ?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={detailsStyle}>
                    <Typography sx={{ color: "rgba(125, 119, 114, 1)" }}>
                        Une multinationale qui contrôlera le monde avec nos drones, nanomachines son.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Contactez-nous</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "center", ...detailsStyle }}>
                    <Typography sx={{ color: "rgba(125, 119, 114, 1)", marginBottom: "5px" }}>
                        Contactez-moi plutôt, aller let's go !
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <a href="https://github.com/zackdevo" rel="noreferrer" target="_blank"><GitHubIcon sx={iconsStyle} fontSize="large" /></a>
                        <a href="https://www.linkedin.com/in/zaccharie-devoulx/" rel="noreferrer" target="_blank"><LinkedInIcon sx={iconsStyle} fontSize="large" /></a>
                        <a href="https://zacch.studiostudio.fr/" rel="noreferrer" target="_blank"><WebAssetIcon sx={iconsStyle} fontSize="large" /></a>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}
export default FooterAccordion