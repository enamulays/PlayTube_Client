import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import { useContext, useState } from "react";
import { DataContext } from "../components/DataProviderContext";
import DeleteVideoModalPopup from "./DeleteVideoModalPopup";
import VideoEditModalPopup from "./VideoEditModalPopup";

function AdminDashboardDetails() {
  const { data, setData } = useContext(DataContext);
  const [isModulPopup, setIsModalPopup] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isEditPopup, setIsEditPopup] = useState(false);
  const [editPopupInput, setEditPopupInput] = useState('');
  const [editIndex, setEditIndex] = useState(null)

  const handlePopup = (index) => {
    setIsModalPopup(true);
    setSelectedIndex(index);
  };

  const handleDelete = () => {
    if (selectedIndex !== null) {
      const splicedData = [...data];
      splicedData.splice(selectedIndex, 1);
      setData(splicedData);
      setSelectedIndex(null);
    }
  };

  const handleEditOpenPopup = (index) =>{
    setIsEditPopup(true);
    setEditPopupInput(data[index].title);
    setEditIndex(index)
  }

  const handleInputValueSet = () =>{
    if(editIndex !== null){
      const updateData = [...data];
      updateData[editIndex].title = editPopupInput;
      setEditIndex(null);
      setIsEditPopup(false)
    }
  }

  return (
    <div>
      <div className={`border mt-5 ${isModulPopup ? "blur-sm" : ""}`}>
        <div className="p-4 flex border-b  text-center items-center">
          <h5 className=" w-1/12">Status</h5>
          <h5 className=" w-1/12">Status</h5>
          <h5 className="w-5/12">Uploaded</h5>
          <h5 className="w-2/12">Rating</h5>
          <h5 className="w-2/12">Uploaded Date</h5>
        </div>
        {data.map((item, index) => (
          <div
            className="flex gap-5 items-center text-center p-4 border-b border-gray-600"
            key={index}
          >
            <div className="w-1/12">
              <label className="switch">
                <input type="checkbox" className="" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="w-1/12 border border-green-600 rounded-2xl px-1 text-green-600">
              Published
            </div>
            <div className="w-5/12 flex items-center justify-start gap-3">
              <img
                src={item.image}
                alt="image"
                className="h-10 w-10 rounded-full"
              />
              <h2>{item.title}</h2>
            </div>
            <div className="w-2/12 flex items-center gap-3 whitespace-nowrap justify-center">
              <h4 className="text-green-900 rounded-xl px-2 bg-green-200">
                285 likes
              </h4>
              <h4 className="text-red-700 bg-rose-200 rounded-xl px-2">
                122 dislikes
              </h4>
            </div>
            <div className="w-2/12">20/02/2024</div>
            <div className="w-1/12 flex justify-center items-center gap-4 text-xl">
              <button
                className="hover:text-purple-600"
                onClick={() => handlePopup(index)}
              >
                <RiDeleteBinLine />
              </button>
              <button
                className="hover:text-purple-600"
                onClick={() =>handleEditOpenPopup(index)}
              >
                <LuPencil />
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModulPopup && (
        <DeleteVideoModalPopup
          handleDelete={handleDelete}
          setIsModalPopup={setIsModalPopup}
        />
      )}
      {isEditPopup && <VideoEditModalPopup setIsEditPopup={setIsEditPopup} 
      editPopupInput={editPopupInput}
      setEditPopupInput={setEditPopupInput}
      handleInputValueSet={handleInputValueSet}/>}
    </div>
  );
}

export default AdminDashboardDetails;
