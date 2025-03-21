import Cards from "../components/Cards";
import Faq from "../components/Faq";
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
            <Faq></Faq>
        </div>
    );
};

export default Home;