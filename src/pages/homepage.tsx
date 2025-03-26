import TopNavbar from "../components/global/TopNavbar";
import HeroContent from "../components/home/HeroContent";
import SpecialOffers from "../components/home/SpecialOffers";
import FeatureRecommendation from "../components/home/FeatureRecommendations";
import FuteureGameShow from "../components/home/FutureGameShow";
import Categories from "../components/home/Categories";
import UnderPrice from "../components/home/UnderPrice";
import BrowseVapor from "../components/home/BrowseVapor";
import VirtualReality from "../components/home/VirtualReality";
import UpdatesOffers from "../components/home/UpdatesOffers";
import BottomBar from "../components/global/BottomBar";
import GameListTabs from "../components/home/GameListsTabs";
import HomePageSidebar from "../components/home/HomePageSideBar";

const Homepage = () => {
  return (
    <div className="h-screen flex flex-col bg-[#131414]">
      {/* Top Navbar */}
      <TopNavbar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 mt-10">
        <HeroContent />
        <SpecialOffers />

        {/* Sidebar Appears Here After Special Offers */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/6 hidden lg:block">
            <HomePageSidebar />
          </div>

          {/* Main Sections */}
          <div className="lg:w-3/4 w-full pl-4">
            <FeatureRecommendation />
            <FuteureGameShow />
            <Categories />
            <BrowseVapor />
            <UnderPrice />
            <GameListTabs />
            <VirtualReality />
            <UpdatesOffers />
            
          </div>
          
        </div>
        <BottomBar />
      </div>

   
      
    </div>
  );
};

export default Homepage;
