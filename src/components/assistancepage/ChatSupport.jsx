import { Container, Divider, Grid, Typography } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { iconGridStyle, iconStyle, typoStyle, linkMess } from "../../styles/stylesVars";

const ChatSupport = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={2} sx={iconGridStyle}>
                    <ChatBubbleOutlineOutlinedIcon sx={iconStyle} />
                </Grid>
                <Grid item xs={12} md={10}>
                    <Typography sx={typoStyle}>
                        Si vous avez des questions concernant nos produits, nos équipes sont également à votre écoute sur <a style={linkMess} href="/#">notre messagerie en ligne</a> 24h/24 et 7j/7.
                    </Typography>
                </Grid>

            </Grid>
            <Divider sx={{ margin: "20px 0", borderColor: "rgba(0,0,0, 0.30)" }} />
        </Container>
    )
}

export default ChatSupport 