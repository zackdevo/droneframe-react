import { Container, IconButton } from "@mui/material"
import logo from "../../images/logo2.png";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from "react-router-dom";

const Classic = (props) => {
    return (
        <Container sx={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
            <Link to="/">
                <img style={{ width: "120px" }} src={logo} alt="Logo DroneFrame" />
            </Link>
            <IconButton onClick={() => { props.setIsShowed(true) }}>
                <MenuOutlinedIcon sx={{ fontSize: 35 }} />
            </IconButton>
        </Container>
    )
}

export default Classic