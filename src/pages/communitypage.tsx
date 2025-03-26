import TopNavbar from "../components/global/TopNavbar";
import BottomBar from "../components/global/BottomBar";
import HeroContentCommunity from "../components/community/HeroContentCommunity";
import CommunityTab from "../components/community/CommunityTabs";


const CommunityPage = () => {
  return (
    <div className="h-screen flex flex-col bg-[#131414]">
      {/* Top Navbar */}
      <TopNavbar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 mt-10">
       
        <HeroContentCommunity/>
        <CommunityTab/>

        {/* Sidebar Appears Here After Special Offers */}
        
        <BottomBar />
      </div>

   
      
    </div>
  );
};

export default CommunityPage;
