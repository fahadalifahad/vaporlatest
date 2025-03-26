
import {  FaComment, FaStar } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";


const GuidesTab = () => {
  return (
    <div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <img
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
                alt="Guide"
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 font-bold">Guide Title</h3>
              <p className="text-sm text-gray-400">
                This is a brief guide description with helpful information.
              </p>
              <div className="flex justify-between mt-2 items-center">
                <div className="flex items-center mt-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="ml-2 text-white">81 ratings</span>
                </div>
                <div className=" flex items-center gap-2">
                  <div className="flex items-center gap-1 ">
                    <FaMapPin className="text-blue-500" /> 10
                  </div>
                  <div className="flex items-center gap-1">
                    <FaComment className="text-gray-400" /> 12
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mt-2 border-t pt-2 border-gray-400">
                Game Name
              </p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-6xl mx-auto text-white mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Large Cards */}
        

        

        {/* Guide Cards */}
        <div className="bg-[#1b2838] p-4 rounded-md shadow-lg">
          <p className="text-lg font-medium mb-2">Terria: Guide</p>
          <div className="flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sJHe5VluUR18fne4sqXHVa9Lh-jq-SN3yw&s"
              alt="Guide Thumbnail"
              className="w-16 h-16 object-cover rounded"
            />
            <h4 className="text-md font-semibold">Building tips and tricks</h4>
          </div>
          <p className="text-gray-400 mt-2">
            Some tips and tricks for people who want to improve their building
            skills but don't know how.
          </p>
          <div className="flex justify-between mt-2 items-center">
            <div className="flex items-center mt-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="ml-2 text-white">81 ratings</span>
            </div>
            <div className=" flex items-center gap-2">
              <div className="flex items-center gap-1 ">
                <FaMapPin className="text-blue-500" /> 10
              </div>
              <div className="flex items-center gap-1">
                <FaComment className="text-gray-400" /> 12
              </div>
            </div>
          </div>
          <p className="text-gray-400 mt-2 border-t border-gray-400 pt-2">
            Terraria
          </p>
        </div>

        <div className="bg-[#1b2838] p-4 rounded-md shadow-lg">
          <p className="text-lg font-medium mb-2">Terria: Guide</p>
          <div className="flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sJHe5VluUR18fne4sqXHVa9Lh-jq-SN3yw&s"
              alt="Guide Thumbnail"
              className="w-16 h-16 object-cover rounded"
            />
            <h4 className="text-md font-semibold">
              Best Weed/Meth/Coke + starter
            </h4>
          </div>
          <p className="text-gray-400 mt-2">Best mixes</p>
          <div className="flex justify-between mt-2 items-center">
            <div className="flex items-center mt-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="ml-2 text-white">81 ratings</span>
            </div>
            <div className=" flex items-center gap-2">
              <div className="flex items-center gap-1 ">
                <FaMapPin className="text-blue-500" /> 10
              </div>
              <div className="flex items-center gap-1">
                <FaComment className="text-gray-400" /> 12
              </div>
            </div>
          </div>
          <p className="text-gray-400 mt-2 border-t border-gray-400 pt-2">
            Schedule I
          </p>
        </div>
      </div>
    </div>
  )
}

export default GuidesTab