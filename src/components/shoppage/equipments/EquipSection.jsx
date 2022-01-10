import { Box } from "@mui/system"
import MainEquip from "./MainEquip"
import OtherEquips from "./OtherEquips"

const EquipSection = (props) => {
    return (
        <Box>
            <MainEquip addToCart={props.addToCart} />
            <OtherEquips addToCart={props.addToCart} />
        </Box>
    )
}

export default EquipSection