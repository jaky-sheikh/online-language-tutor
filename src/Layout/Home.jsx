import Cards from "../components/Cards";
import Guaranteed from "../components/Guaranteed";
import Slider from "../components/Slider";
import Stat from "../components/Stat";



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="my-6">
                <Stat></Stat>
            </div>
            <Cards></Cards>
            <Guaranteed></Guaranteed>
        </div>
    );
};

export default Home;