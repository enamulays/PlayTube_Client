import { useEffect, useRef, useContext } from "react";
import "../style/HomePageMain.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProviderContext";

function HomePageMain() {
  const videoRefs = useRef([]);
  const navigate = useNavigate();
  const { data } = useContext(DataContext);

  useEffect(() => {
    const handleVideoNavigate = (index) => () => {
      navigate("/video_details", { state: { ...data[index] } });
    };

    const currentVideoRefs = videoRefs.current;

    currentVideoRefs.forEach((videoRef, index) => {
      if (videoRef) {
        videoRef.addEventListener("click", handleVideoNavigate(index));
      }
    });

    return () => {
      currentVideoRefs.forEach((videoRef, index) => {
        if (videoRef) {
          videoRef.removeEventListener("click", handleVideoNavigate(index));
        }
      });
    };
  }, [navigate, data]);

  return (
    <div className="home-page">
      <div className="home-page-in">
        {data.map((item, index) => (
          <div className="home-card-inner" key={index}>
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
