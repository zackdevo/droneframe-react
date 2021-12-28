import BestSells from "../components/BestSells";
import Gamme from "../components/Gamme";
import Header from "../components/Header";

const Home = (props) => {
    return (
        <div>
            <Header />
            <BestSells />
            <Gamme />
        </div>
    )
}

export default Home