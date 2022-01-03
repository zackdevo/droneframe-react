import { Button, FormGroup, TextField } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const NewsForm = () => {
    const formStyle = {
        margin: "10px  0",
        padding: "10px",
        color: "white"
    }

    const submitBtnStyle = {
        backgroundColor: "rgba(36, 40, 52, 0.6)",
        borderRadius: "20px",
        border: "2px solid rgba(125, 119, 114, 0.8)",
        color: "rgba(255, 255, 255, 1)",
        "&:hover": {
            color: "rgba(36, 40, 52, 0.6)",
            backgroundColor: "rgba(229, 229, 229, 0.1)",
            border: "2px solid rgba(36, 40, 52, 0.6) "
        },
        "&:hover .iconBtn": {
            animation: "shake 2s linear infinite"
        },
        transition: "400ms",
        marginTop: "5px"
    }
    return (
        <FormGroup sx={formStyle}>
            <TextField sx={{ marginBot: "5px" }} helperText="Veuillez entrer votre adresse mail." id="outline-required" label="Exemple : 123@email.com" variant="outlined" />
            <Button sx={submitBtnStyle} endIcon={<MailOutlineIcon className="iconBtn" />}>S'abonner</Button>
        </FormGroup>
    )
}

export default NewsForm