import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import bgImage from "../images/bg-header.jpg"

const Header = () => {
    const headerStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "450px",
        position: "relative",
        textAlign: "center",
        zIndex: 1,
    }
    return (
        <Box sx={headerStyle}>
            <div style={{ paddingTop: "30px" }}>
                <h1 style={{
                    marginTop: '0',
                    fontFamily: "'Rhodium Libre', 'serif'",
                }}>
                    Voyez le monde différement
                </h1>
                <h2 style={{ fontFamily: "'Rhodium Libre', 'serif'", }}>Les nouveaux drones conçus pour vous</h2>
                <Link className="headerLink" to="/shop">En savoir plus &gt;</Link>
            </div>
        </Box>
    )
}

export default Header