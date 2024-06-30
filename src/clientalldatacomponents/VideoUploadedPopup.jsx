import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import PropTypes from "prop-types";
import { useState } from "react";

function VideoUploadedPopup({ setUploadedpop, uploading }) {
  const [uploadCancelPopup, setUploadCancelPopup] = useState(false);

  return (
    <div className="p-4 space-y-4" >
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl">
            {uploading ? "Uploading Video..." : "Uploaded Video"}
          </h2>
          <button
            className="text-x hover:text-gray-300"
            onClick={() => setUploadedpop(false)}
          >
            <RxCross1 />
          </button>
        </div>
        <h6 className="text-xs">Track your video uploading process</h6>
      </div>
      <div className="border p-4 flex items-start gap-2">
        <div className="text-purple-400 bg-fuchsia-200 text-2xl rounded-full p-1">
          <MdOutlineSlowMotionVideo />
        </div>
        <div>
          <h4>Video Title Name Here</h4>
          <h5 className=" font-extralight">16 MB</h5>
          <div className="flex justify-start items-center gap-1 mt-2">
            {uploading ? (
              <div className="border-4 h-5 w-5 rounded-full border-t-purple-400 animate-spin"></div>
            ) : (
              <div className=" p-0.5 bg-fuchsia-300 text-gray-900 rounded-full">
                <TiTick />
              </div>
            )}
            {uploading ? "Uploading..." : "Upload Successfully"}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="border py-2 px-16 hover:bg-fuchsia-200 hover:text-gray-800" onClick={()=>setUploadCancelPopup(true)}>
          Cancel
        </button>
        <button className="border py-2 px-16 hover:bg-fuchsia-200 hover:text-gray-800">
          Finish
        </button>
      </div>
      {uploadCancelPopup && (
        <div className="absolute top-0 left-0 bg-slate-900 h-60 w-full p-10 text-center">
          <h2 className="text-2xl pb-6">Do you want to exit from upload?</h2>
          <div className=" flex gap-5 justify-center items-center">
            <button onClick={() => setUploadCancelPopup(false)} className="border py-2 px-16 hover:bg-fuchsia-200 hover:text-gray-800">No</button>
            <button onClick={() => setUploadedpop(false)} className="border py-2 px-16 hover:bg-fuchsia-200 hover:text-gray-800">Yes</button>
          </div>
        </div>
      )}
    </div>
  );
}
VideoUploadedPopup.propTypes = {
  setUploadedpop: PropTypes.func.isRequired,
  uploading: PropTypes.object.isRequired,
};

export default VideoUploadedPopup;
