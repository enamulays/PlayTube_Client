import { useContext } from "react";
import { DataContext } from "../components/DataProviderContext";
import { useNavigate } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import AdminDashboardDetails from "./AdminDashboardDetails";

function AdminDashboard() {
  const navigate = useNavigate();
  const { data, setPopup } = useContext(DataContext);
  const datas = data.find((item) => item);

  const handleUplodaNavigate = (e) => {
    navigate(`/client-all-data/${datas.id}`);
    e.stopPropagation();
    setPopup(true);
  };
  return (
    <div className="h-screen p-4 overflow-auto relative">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Wecome Back, {"code"}</h1>
          <h6 className=" font-extralight">
            Seamless Video Management, Elevated Results.
          </h6>
        </div>
        <button
          onClick={handleUplodaNavigate}
          className="flex items-center gap-1 bg-pink-500 hover:bg-pink-600  px-2 py-2"
        >
          <LuPlus className="text-xl" /> Upload Video
        </button>
      </div>
      <div className="flex gap-4 justify-between items-center">
        <div className="border w-full p-4">
          <div className="text-2xl bg-purple-200 text-red-500 w-7 h-7 p-1 flex justify-center items-center rounded-full mb-4">
            <IoEyeOutline />
          </div>
          <h6>Total Views</h6>
          <h2 className="text-3xl font-medium">223,34</h2>
        </div>
        <div className="border w-full p-4">
          <div className="text-2xl bg-purple-200 text-red-500 w-7 h-7 p-1 flex justify-center items-center rounded-full mb-4">
            <CiUser />
          </div>
          <h6>Total Subscribers</h6>
          <h2 className="text-3xl font-medium">223</h2>
        </div>
        <div className="border w-full p-4">
          <div className="text-2xl bg-purple-200 text-red-500 w-7 h-7 p-1 flex justify-center items-center rounded-full mb-4">
            <CiHeart />
          </div>
          <h6>Total Likes</h6>
          <h2 className="text-3xl font-medium">22,345</h2>
        </div>
      </div>
      <AdminDashboardDetails />
    </div>
  );
}

export default AdminDashboard;
