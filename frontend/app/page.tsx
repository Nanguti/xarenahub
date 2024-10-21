import BuyingGuides from "./sections/BuyingGuides";
import Hero from "./sections/Hero";
import LatestDeals from "./sections/LatestDeals";
import RecentHeadlines from "./sections/RecentHeadlines";
import Reviews from "./sections/Reviews";
import UpcomingRelease from "./sections/UpcomingRelease";

const Home: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <Reviews />
      <LatestDeals />
      <RecentHeadlines />
      <UpcomingRelease />
      <BuyingGuides />
    </div>
  );
};

export default Home;
