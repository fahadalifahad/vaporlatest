import TopNavbar from "../components/global/TopNavbar";
import BottomBar from "../components/global/BottomBar";
import HeroContentAbout from "../components/about/HeroContentAbout";
import GameAccess from "../components/about/GameAccess";
import CommunityHardware from "../components/about/CommunityHardware";
import FeaturesSection from "../components/about/FeatureSection";


const AboutPage = () => {
  return (
    <div className="h-screen flex flex-col bg-[#131414]">
      {/* Top Navbar */}
      <TopNavbar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 mt-10">
        <HeroContentAbout/>
        <GameAccess/>
        <CommunityHardware/>
        <FeaturesSection/>
        

        {/* Sidebar Appears Here After Special Offers */}
        
        <BottomBar />
      </div>

   
      
    </div>
  );
};

export default AboutPage;
