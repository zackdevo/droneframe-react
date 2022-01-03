import BestSells from "../components/BestSells";
import Gamme from "../components/Gamme";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";

const Home = (props) => {
    return (
        <div>
            <Header />
            <BestSells />
            <Gamme />
            <NewsLetter />
        </div>
    )
}

export default Home