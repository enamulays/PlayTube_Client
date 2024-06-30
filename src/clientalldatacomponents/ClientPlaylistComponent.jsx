import { useContext } from "react";
import { DataContext } from "../components/DataProviderContext";
import styles from "../style/clientAllDataStyle/ClientPlayList.module.css";
import { useNavigate } from "react-router-dom";

function ClientPlaylistComponent() {
  const navigate = useNavigate();
  const { data } = useContext(DataContext);

  const handleNavigate = (item) => {
     navigate(`/video-details/${item.id}`, {state: {...item}});
  };

  return (
    <>
      <div className={styles.playlist}>
        {data.map((item, index) => (
          <div className={styles.card} key={index} onClick={()=>handleNavigate(item)}>
            <video src={item.video}></video>
            <div className={styles.info}>
              <div className={styles.info_left}>
                <h4>{item.chName}</h4>
                <h5>
                  {item.view}K Views . {item.upTime}
                </h5>
              </div>
              <h3>12 videos</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ClientPlaylistComponent;
