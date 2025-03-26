

import { FaThumbsUp, FaComment } from "react-icons/fa";


const ReviewsTab = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2].map(( index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex flex-col justify-between text-sm text-gray-400">
                        <p>1,562 people found this review helpful</p>
                        <p>224 people found this review funny</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <FaThumbsUp className="text-blue-500 text-4xl " />
                        <div>
                          <span className="font-bold">Recommended</span>
                          <p className="text-gray-400 text-sm">1.1 hrs on record</p>
                        </div>
                      </div>
        
                      <p className="text-gray-400 text-sm mt-2">Posted: 23 March</p>
                      <p className="mt-2 border-b pb-6 border-gray-400">
                        Based on the historical research by associate professor Thomas
                        Lockley.
                      </p>
                      <div className="flex justify-between mt-2 text-gray-400">
                        <p>Metro extrodes</p>
                        <div className="flex items-center gap-1">
                          <FaComment /> 21
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    </div>
  )
}

export default ReviewsTab