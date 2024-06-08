import { useContext } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FiFolderPlus } from "react-icons/fi";
import styles from "../style/videoDetails.module.css";
import { DataContext } from "../components/DataProviderContext";
import { useParams, useLocation } from "react-router-dom";

function CommentsSection() {
  const { data, comments } = useContext(DataContext);
  const { id } = useParams();
  const location = useLocation();
  const videoData = location.state || data.find((item) => item.id === id) || {};
  const { title, view, upTime, chName, image, subscriber, description } =
    videoData;

  return (
    <>
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
            <div className={styles.mid_left_content}>
              <h2>{chName}</h2>
              <span>{subscriber}k Subscriber</span>
            </div>
          </div>
          <button>Subscribe</button>
        </div>
        <div className={styles.info_bottom}>{description}</div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comments_top}>
          <h2>547 Comments</h2>
          <input type="text" placeholder="Add a Comments" />
        </div>
        <div className={styles.comments_bottom}>
          {comments.map((comment, index) => (
            <div key={index} className={styles.comments_content}>
              <img src={image} alt="image" className="bottom-image" />
              <div className={styles.comments_text}>
                <h3>
                  {comment.name}. {comment.comTime} {} ago
                </h3>
                <h5>{comment.userName}</h5>
                <h4>{comment.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CommentsSection;
