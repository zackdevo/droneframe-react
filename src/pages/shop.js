import { Box } from "@mui/system"
import DroneSection from "../components/shoppage/drones/DroneSection"
import EquipSection from "../components/shoppage/equipments/EquipSection"
import Reassurance from "../components/shoppage/Reassurance"

const Shop = (props) => {
    return (
        <Box>
            <DroneSection addToCart={props.addToCart} />
            <EquipSection addToCart={props.addToCart} />
            <Reassurance />
        </Box>
    )
}
export default Shop