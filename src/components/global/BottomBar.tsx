import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaSteam } from "react-icons/fa";

const BottomBar = () => {
  return (
    <footer className="bottom-0 py-10 left-0 w-full bg-[#0F1A20] text-gray-400 text-sm mt-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-4">
        {/* Navigation Links */}
        <h3 className="text-white text-sm font-semibold mb-3">VAPOR</h3>
        <div className="flex flex-wrap justify-center gap-6 text-xs mb-6">
          <a href="#" className="hover:text-white">About Valve</a>
          <a href="#" className="hover:text-white">Jobs</a>
          <a href="#" className="hover:text-white">VaporWork</a>
          <a href="#" className="hover:text-white">Distribution</a>
          <a href="#" className="hover:text-white">Support</a>
          <a href="#" className="hover:text-white">Gift C</a>
        </div>
        
        {/* Branding Section */}
        <p className="text-xs mb-4">Branding & Marketing by <span className="text-white font-semibold">VAPOR</span></p>
        
        {/* Social Media Icons */}
        <div className="flex gap-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-white text-lg">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-lg">
            <FaXTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-lg">
            <FaSteam />
          </a>
        </div>
        
        {/* Footer Info */}
        <p className="text-xs">© 2025 Valve Corporation. All rights reserved.</p>
        <p className="text-xs">Architectural images are artist impressions.</p>
        
        {/* Back to Top */}
        <a href="/" className="text-xs mt-4 hover:text-white">Back to top</a>
      </div>
    </footer>
  );
};

export default BottomBar;
