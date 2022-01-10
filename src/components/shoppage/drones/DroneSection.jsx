import { Box } from "@mui/material"
import MainDrone from "./MainDrone"
import OtherDrones from "./OtherDrones"

const DroneSection = (props) => {
    return (
        <Box>
            <MainDrone addToCart={props.addToCart} />
            <OtherDrones addToCart={props.addToCart} />
        </Box>
    )
}

export default DroneSection