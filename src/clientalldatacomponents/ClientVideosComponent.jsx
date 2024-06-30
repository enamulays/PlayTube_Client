import { useContext, useState } from "react";
import { DataContext } from "../components/DataProviderContext";
import { useNavigate } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import VideoModalPopup from "./VideoModalPopup";
import VideoUploadedPopup from "./VideoUploadedPopup";


function ClientVideosComponent() {
  const { data, popup, setPopup } = useContext(DataContext);
  const navigate = useNavigate();
  const [uploadedpop, setUploadedpop] = useState("");
  const [uploading, setUploading] = useState(true);
  // Draggable function Start for VideoUploadedPopup Section
  const [draggale, setDraggable] = useState(false);
  const [position, setPostion] = useState({ top: 340, left: 210 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDraggable(true);
    setOffset({
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    });
  };
  const handleMouseMove = (e) => {
    if (draggale) {
      setPostion({
        left: e.clientX - offset.x,
        top: e.clientY - offset.y,
      });
    }
  };
  const handleMouseUp = () => {
    setDraggable(false);
  };
  // Draggable function End for VideoUploadedPopup Section

  const videoUpload = data.find((item) => item.videoUploads);

  const handleVideoClick = (item) => {
    navigate(`/video-details/${item.id}`, { state: { ...item } });
  };

  return (
    <>
      <div className="home-page">
        <div className="home-page-in">
          {videoUpload ? (
            data.map((item, index) => (
              <div className="home-card-inner" key={index} id={item.id}>
                <video
                  src={item.video}
                  className="top-video"
                  onClick={() => handleVideoClick(item)}
                />
                <div className="home-card-in-bottom">
                  <div className="card-info">
                    <h1>{item.title}</h1>
                    <span>{item.view}k Views</span>
                    <span> . {item.upTime} minutes ago</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full w-1/2 mx-auto text-center flex justify-center items-center flex-col space-y-3">
              <div className=" bg-fuchsia-200 text-gray-800 p-2 rounded-full text-xl">
                <CiPlay1 />
              </div>
              <h4 className=" font-bold">No Videos uploaded</h4>
              <p>
                This page has yet to upload a video. Search another page in
                order to find more videos.
              </p>
              <button
                className="flex items-center justify-between gap-2 bg-purple-500 py-2 px-3 hover:bg-fuchsia-500"
                onClick={() => setPopup(true)}
              >
                <FaPlus /> New Video
              </button>
            </div>
          )}
        </div>
        {popup && (
          <div className="absolute top-10 left-28  bg-slate-900 h-custom42 w-3/4 z-20 overflow-auto border ">
            <VideoModalPopup
              setPopup={setPopup}
              setUploadedpop={setUploadedpop}
              setUploading={setUploading}
            />
          </div>
        )}
        {uploadedpop && (
          <div
            className=" bg-slate-900 w-3/6 z-20 overflow-auto border-zinc-700 border rounded-md"
            style={{
              top: position.top,
              left: position.left,
              position: "absolute",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <VideoUploadedPopup
              setUploadedpop={setUploadedpop}
              uploading={uploading}
            />
          </div>
        )}
      </div>
    </>
  );
}


export default ClientVideosComponent;
