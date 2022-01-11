import { Box } from "@mui/material"
import ChatSupport from "../components/assistancepage/ChatSupport"
import PhoneSupport from "../components/assistancepage/PhoneSupport"
import RepairSupport from "../components/assistancepage/RepairSupport"

const Assistance = () => {
    return (
        <Box sx={{ marginTop: "40px" }}>
            <h1 style={{ textAlign: "center" }}>Support DroneFrame</h1>
            <PhoneSupport />
            <ChatSupport />
            <RepairSupport />
        </Box>
    )
}

export default Assistance