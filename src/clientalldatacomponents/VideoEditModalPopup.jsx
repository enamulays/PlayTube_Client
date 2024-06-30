import { RxCross1 } from "react-icons/rx";
import PropTypes from "prop-types";

function VideoEditModalPopup({
  setIsEditPopup,
  editPopupInput,
  setEditPopupInput,
  handleInputValueSet,
}) {
  const handleInputOnChange = (e) => {
    setEditPopupInput(e.target.value);
  };

  return (
    <div>
      <div className="absolute top-10 left-1/3 w-2/5 h-4/5 m-auto bg-gray-900 overflow-auto p-4 border border-gray-500 rounded-lg space-y-4">
        <div>
          <div className="flex justify-between items-center text-xl">
            <h2 className="">Edit Video</h2>
            <button
              onClick={() => setIsEditPopup(false)}
              className="hover:text-purple-400 rounded-full p-1 "
            >
              <RxCross1 />
            </button>
          </div>
          <h6 className="text-sm font-light">{`Share where you've worked on your profile.`}</h6>
        </div>
        <div className="relative">
          <h5>Thumbnail*</h5>
          <div className="border border-dashed p-1">
            <img
              src="../image/pexels-photo-3561339.webp"
              alt="image"
              className=" cursor-pointer"
            />
            <input
              type="file"
              className="absolute top-6 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <h5 className="pb-1">Title*</h5>
          <input
            type="text"
            className="bg-transparent border w-full py-1 px-2"
            value={editPopupInput}
            onChange={handleInputOnChange}
          />
        </div>
        <div>
          <h5 className="pb-1">Description</h5>
          <textarea
            name="text"
            rows="6"
            className="bg-transparent border w-full  py-1 px-2"
          ></textarea>
        </div>
        <div className="py-3 flex justify-between">
          <button
            className="border py-2 px-20 hover:bg-pink-600"
            onClick={() => setIsEditPopup(false)}
          >
            Cancel
          </button>
          <button
            className="border py-2 px-20 hover:bg-pink-600"
            onClick={handleInputValueSet}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

VideoEditModalPopup.propTypes = {
  setIsEditPopup: PropTypes.func.isRequired,
  editPopupInput: PropTypes.string.isRequired,
  setEditPopupInput: PropTypes.func.isRequired,
  handleInputValueSet: PropTypes.func.isRequired,
};

export default VideoEditModalPopup;
