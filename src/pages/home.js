import { Box } from "@mui/material";
import BestSells from "../components/homepage/BestSells";
import Gamme from "../components/homepage/Gamme";
import Header from "../components/homepage/Header";
import NewsLetter from "../components/homepage/NewsLetter";

const Home = (props) => {
    return (
        <Box>
            <Header />
            <BestSells addToCart={props.addToCart} />
            <Gamme />
            <NewsLetter />
        </Box>
    )
}

export default Home