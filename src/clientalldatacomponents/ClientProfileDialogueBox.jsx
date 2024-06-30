import PropTypes from "prop-types";
import { BsPencilSquare } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { useContext } from "react";
import { DataContext } from "../components/DataProviderContext";
import { PiUserSquareLight, PiSignOut } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdOutlinePrivacyTip,
  MdOndemandVideo,
} from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";


function ClientProfileDialogueBox({ dialogue, notification, profile }) {
  const { data, setPopup } = useContext(DataContext);
  const datas = data.find((item) => item);
  const navigate = useNavigate();

  const handleUplodaNavigate = (e) => {
    navigate(`/client-all-data/${datas.id}`);
    e.stopPropagation();
    setPopup(true);
  };

  const handleProfileNavigate = (title) => {
    if (title === "Settings") {
      navigate(`/client-personal-details/${datas.id}`);
    } else if (title === "Go to Dashboard") {
      navigate(`/client-dashboard/${datas.id}`);
    } else if (title === "Privacy") {
      navigate(`/privacy/${datas.id}`);
    }
    else if(title==="Terms & Condition"){
      navigate(`/terms-and-condition/${datas.id}`);
    }
  };

  return (
    <div>
      {dialogue && (
        <div
          className="absolute top-14 right-24 bg-white text-gray-800 px-2 py-2 rounded-lg space-y-5 z-20"
          onClick={handleUplodaNavigate}
        >
          <div className="flex items-center justify-start gap-2 cursor-pointer z-10">
            <button className="text-2xl">
              <MdOndemandVideo />
            </button>
            <button className="text-sm">Upload Video</button>
          </div>
          <div className="flex items-center justify-start gap-2 cursor-pointer">
            <button className="text-2xl">
              <BsPencilSquare />
            </button>
            <button className="text-sm">Create Post</button>
          </div>
        </div>
      )}
      {notification && (
        <div
          className="absolute top-14 right-12 bg-white text-gray-800 rounded-lg w-96 h-custom38 z-20 overflow-auto scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center text-2xl text-black p-3 border-b mb-3 sticky top-0 bg-white">
            <div className="text-2xl text-black">Notifications</div>
            <button>
              <FiSettings />
            </button>
          </div>
          {notifications
            .sort((a, b) => a.time - b.time)
            .map((item, index) => (
              <div key={index} className="flex gap-3 p-3">
                <img
                  src={datas.image}
                  alt="image"
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h4 className="text-gray-950">{item.title}</h4>
                  <h5 className="font-light text-sm">
                    {item.time} minutes ago
                  </h5>
                </div>
              </div>
            ))}
        </div>
      )}
      {profile && (
        <div
          className="absolute top-14 right-0 bg-white text-gray-800 px-2 py-2 rounded-lg space-y-3 z-20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-start gap-2 cursor-pointer hover:text-black">
            <button className="text-2xl">
              <img
                src={datas.image}
                alt=""
                className="h-12 w-12 rounded-full"
              />
            </button>
            <button className="text-sm">Go to Your Channel</button>
          </div>
          {profileData.map((item, index) => (
            <div
              className="flex items-center justify-start pb-2 gap-2 cursor-pointer hover:text-amber-950 border-b-gray-200 border-b"
              key={index}
              onClick={() => handleProfileNavigate(item.title)}
            >
              <button className="text-2xl">{item.icon}</button>
              <button className="text-sm">{item.title}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ClientProfileDialogueBox.propTypes = {
  dialogue: PropTypes.bool,
  notification: PropTypes.bool,
  profile: PropTypes.bool,
};

export default ClientProfileDialogueBox;

const profileData = [
  { icon: <PiUserSquareLight />, title: "Switch Account" },
  { icon: <MdDashboard />, title: "Go to Dashboard" },
  { icon: <MdOutlinePrivacyTip />, title: "Privacy" },
  { icon: <HiOutlineClipboardDocumentList />, title: "Terms & Condition" },
  { icon: <PiSignOut />, title: "Settings" },
  { icon: <FiSettings />, title: "Sign out" },
];
const notifications = [
  { icon: "", title: "Javascript all playlist here", time: "24" },
  { icon: "", title: "Array method and iterables object", time: "05" },
  { icon: "", title: "Variables and Data types", time: "12" },
  { icon: "", title: "Defference between array and Object", time: "38" },
  { icon: "", title: "String and Number method", time: "53" },
  {
    icon: "",
    title: "Use the simple trick to sort an array descending",
    time: "45",
  },
  { icon: "", title: "Javascript all playlist here", time: "24" },
  { icon: "", title: "Array method and iterables object", time: "05" },
  { icon: "", title: "Variables and Data types", time: "12" },
  { icon: "", title: "Defference between array and Object", time: "38" },
  { icon: "", title: "String and Number method", time: "53" },
  {
    icon: "",
    title: "Use the simple trick to sort an array descending",
    time: "45",
  },
];
