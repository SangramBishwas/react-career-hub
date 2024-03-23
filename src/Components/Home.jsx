import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";

const Home = () => {
    return (
        <div className="my-32">
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;