import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

function DeleteVideoModalPopup({ handleDelete, setIsModalPopup }) {
  const handleDeleted = ()=>{
    setIsModalPopup(false);
    handleDelete()
  }
  return (
    <div className="absolute top-1/3  w-full left-0 flex justify-center items-center">
      <div className="p-4 border w-2/5 bg-gray-900">
        <div className="flex justify-between gap-4 pb-5">
          <div>
            <RiDeleteBin6Line className="bg-purple-200 w-8 h-8 p-1 rounded-full text-red-400" />
          </div>
          <div>
            <h2 className="text-xl">Delete Video</h2>
            <h5 className="text-sm">
              Are you sure you want to delete this video? Once its deleted, you
              will not be able to recover it.
            </h5>
          </div>
          <div ><RxCross1 className="hover:bg-purple-200 p-1 w-7 h-7 rounded-full hover:text-red-400 cursor-pointer" onClick={()=>setIsModalPopup(false)}/></div>
        </div>
        <div className="flex justify-between">
          <button className="border hover:bg-pink-500 py-2 px-16" onClick={()=>setIsModalPopup(false)}>Cancel</button>
          <button className="border hover:bg-pink-500 py-2 px-16" onClick={handleDeleted}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
DeleteVideoModalPopup.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  setIsModalPopup: PropTypes.func.isRequired,
};
export default DeleteVideoModalPopup;
