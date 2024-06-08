import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { DataContext } from "../components/DataProviderContext";
import styles from "../style/videoDetails.module.css";
import SideBarListData from "../components/SideBarListData";
import { useLocation } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FiFolderPlus } from "react-icons/fi";

function VideoDetailsSection() {
  const { sidebar, data } = useContext(DataContext);
  const location = useLocation();
  const { video, title, view, upTime, chName, image, subscriber } =
    location.state || {};

  useEffect(() => {});

  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <Navbar />
          <div className="container-bottom">
            <div className={`${styles.sidebar_wrapper} ${"sidebar-wrap"}`}>
              <SideBarListData sidebar={sidebar} />
            </div>
            <div className={styles.video_details}>
              <div className={styles.video_details_left}>
                <div className={styles.video_details_vid}>
                  <video src={video} controls></video>
                </div>
                <div className={styles.info_section}>
                  <div className={styles.info_top}>
                    <div className={styles.info_top_left}>
                      <h1>{title}</h1>
                      <span>
                        {view}k Views . {upTime} minutes ago
                      </span>
                    </div>
                    <div className={styles.info_top_right}>
                      <div className={styles.likebtn}>
                        <button>
                          <BiLike />
                        </button>
                        <button>
                          <BiDislike />
                        </button>
                      </div>
                      <button className={styles.save_btn}>
                        <FiFolderPlus /> Save
                      </button>
                    </div>
                  </div>
                  <div className={styles.info_mid}>
                    <div className={styles.mid_left}>
                      <img src={image} alt="image" className="bottom-image" />
                      <h2>{chName}</h2>
                      <span>{subscriber}k Subscriber</span>
                    </div>
                    <button>Subsribe</button>
                  </div>
                  <div className={styles.info_bottom}></div>
                </div>
              </div>
              <div className={styles.video_details_right}>
                <div className={styles.card_inner}>
                  <video src={video} className="top-video" />
                  <div className="home-card-in-bottom">
                    <img src={image} alt="image" className="bottom-image" />
                    <div className="card-info">
                      <h1>{title}</h1>
                      <span>{view}k Views</span>
                      <span> . {upTime} minutes ago</span>
                      <h2>{chName}</h2>
                    </div>
                  </div>
                </div>
                {data.map((item, index) => (
                  <div className={styles.car_inner} key={index}>
                    <video src={item.video} className="top-video" />
                    <div className="home-card-in-bottom">
                      <img
                        src={item.image}
                        alt="image"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoDetailsSection;
