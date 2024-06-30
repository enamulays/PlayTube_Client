import { useRef } from "react";
import { LuUpload } from "react-icons/lu";
import PropTypes from 'prop-types';
import { RxCross1 } from "react-icons/rx";

function VideoModalPopup({ setPopup, setUploadedpop }) {
  const inputClickRef = useRef(null);
  const textareaRef = useRef(null);
  

  const handleClick = () => {
    inputClickRef.current.click();
  };

  const handlePopup = () => {
    if (textareaRef.current && textareaRef.current.value == "") {
      setPopup(false);
      setUploadedpop(true)
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 border-b text-lg">
        <button className="text-white text-2xl flex justify-center items-center rounded-full hover:hover:bg-pink-600" onClick={()=>setPopup(false)}><RxCross1 /></button>
        <h4>Upload Videos</h4>
        <button
          className="bg-pink-500 py-1 px-3 rounded-sm hover:bg-pink-600"
          onClick={handlePopup}
        >
          Upload
        </button>
      </div>
      <div className="w-9/12 m-auto space-y-5">
        <div className="relative border border-dashed text-center space-y-3 mt-4 py-12">
          <div
            onClick={handleClick}
            className="flex justify-center items-center text-7xl font-light text-purple-400 bg-fuchsia-200 w-24 h-24 rounded-full m-auto"
          >
            <LuUpload />
          </div>
          <input type="file" ref={inputClickRef} className="hidden" />
          <h4>Drag and drop video files to upload</h4>
          <h5 className="font-thin">
            Your videos will be private until you publish them.
          </h5>
          <button
            className="bg-pink-500 py-2 px-3 rounded-sm hover:bg-pink-600"
            onClick={handleClick}
          >
            Select Files
          </button>
        </div>
        <div className="flex flex-col items-start space-y-1">
          <span>Thumbnail*</span>
          <input
            type="file"
            className="bg-slate-700 w-full border"
            required
          />
        </div>
        <div className="flex flex-col items-start space-y-1">
          <span>Title*</span>
          <input type="text" className="bg-slate-700 w-full border" required />
        </div>
        <div className="flex flex-col items-start space-y-1 pb-4">
          <span>Description*</span>
          <textarea
            type="text"
            className="bg-slate-700 w-full border"
            required
            rows="5"
            cols="auto"
            ref={textareaRef}
          />
        </div>
      </div>
    </div>
  );
}

VideoModalPopup.propTypes = {
  setPopup: PropTypes.func.isRequired,
  setUploadedpop: PropTypes.func.isRequired,
};

export default VideoModalPopup;
