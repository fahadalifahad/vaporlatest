import TopNavbar from "../components/global/TopNavbar";
import BottomBar from "../components/global/BottomBar";
import HeroContentSupport from "../components/support/HeroContentSupport";


const SupportPage = () => {
  return (
    <div className="h-screen flex flex-col bg-[#131414]">
      {/* Top Navbar */}
      <TopNavbar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 mt-10">
        <HeroContentSupport/>
        

        {/* Sidebar Appears Here After Special Offers */}
        
        <BottomBar />
      </div>

   
      
    </div>
  );
};

export default SupportPage;
