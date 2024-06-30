import { useContext, useRef } from "react";
import { DataContext } from "../components/DataProviderContext";
import styles from "../style/videoDetails.module.css";
import { useLocation, useParams } from "react-router-dom";
import CommentsSection from "./CommentsSection";

function VideoDetailsSection() {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const location = useLocation();
  const videoData =
    location.state || data.find((item) => item.id === Number(id)) || {};
  const { video, title, view, upTime, chName } = videoData;
  const singleref = useRef();

  const handleChange = (item) => {
    if (singleref.current) {
      singleref.current.src = item.video;
    }
  };
  const handleChanges = () => {
    singleref.current.src = video;
  };

  return (
    <>
      <div className={`${styles.container_bottom}`}>
        <div className={styles.video_details}>
          <div className={styles.video_details_left}>
            <div className={styles.video_details_vid}>
              <video src={video} controls ref={singleref}></video>
            </div>
            {/* Comment Section Area */}
            <CommentsSection />
          </div>
          <div className={styles.video_details_right}>
            <div className={styles.card_inner}>
              <video
                src={video}
                className="top-video"
                onClick={() => handleChanges()}
              />
              <div className="home-card-in-bottom">
                <div className={styles.card_info}>
                  <h1>{title}</h1>
                  <span>{view}k Views</span>
                  <span> . {upTime} minutes ago</span>
                  <h2>{chName}</h2>
                </div>
              </div>
            </div>
            {data.map((item, index) => (
              <div className={styles.card_inner} key={index}>
                <video
                  src={item.video}
                  className="top-video"
                  onClick={() => handleChange(item)}
                />
                <div className="home-card-in-bottom">
                  <div className={styles.card_info}>
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
      </div>
    </>
  );
}

export default VideoDetailsSection;
