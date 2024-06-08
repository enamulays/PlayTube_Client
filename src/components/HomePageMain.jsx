import { useEffect, useRef, useContext } from "react";
import "../style/HomePageMain.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProviderContext";

function HomePageMain() {
  const videoRefs = useRef([]);
  const navigate = useNavigate();
  const { data } = useContext(DataContext);

  useEffect(() => {
    const handleVideoNavigate = (id) => () => {
      const videoData = data.find((item) => item.id === id);
      navigate(`/video-details/${id}`, { state: { ...videoData } });
    };

    const currentVideoRefs = videoRefs.current;

    currentVideoRefs.forEach((videoRef, index) => {
      if (videoRef) {
        videoRef.addEventListener("click", handleVideoNavigate(data[index].id));
      }
    });

    return () => {
      currentVideoRefs.forEach((videoRef, index) => {
        if (videoRef) {
          videoRef.removeEventListener(
            "click",
            handleVideoNavigate(data[index].id)
          );
        }
      });
    };
  }, [navigate, data]);

  return (
    <div className="home-page">
      <div className="home-page-in">
        {data.map((item, index) => (
          <div className="home-card-inner" key={item.id} id={item.id}>
            <video
              src={item.video}
              className="top-video"
              ref={(el) => (videoRefs.current[index] = el)}
            />
            <div className="home-card-in-bottom">
              <img
                src={item.image}
                alt={`thumbnail-${index}`}
                className="bottom-image"
              />
              <div className="card-info">
                <h1>{item.title}</h1>
                <span>{item.view}k Views</span>
                <span> . {item.upTime} minutes ago</span>
                <h2>{item.chName}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePageMain;
