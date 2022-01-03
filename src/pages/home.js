import BestSells from "../components/homepage/BestSells";
import Gamme from "../components/homepage/Gamme";
import Header from "../components/homepage/Header";
import NewsLetter from "../components/homepage/NewsLetter";

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