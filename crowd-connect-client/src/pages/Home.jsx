import CampaignCard from "../components/CampaignCard";
import GrowWithUs from "../components/GrowWithUs";
import NewsLatter from "../components/NewsLatter";
import Slider from "../components/Slider";
import SuccessStories from "../components/SuccessStories";
import Partners from "./Partners";


const Home = () => {

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>

            <div>
                <CampaignCard></CampaignCard>
            </div>

            <div>
                <GrowWithUs></GrowWithUs>
            </div>

            <div>
                <NewsLatter></NewsLatter>
            </div>

            <div>
                <SuccessStories></SuccessStories>
            </div>

            <div>
                <Partners></Partners>
            </div>
        </div>
    );
};

export default Home;