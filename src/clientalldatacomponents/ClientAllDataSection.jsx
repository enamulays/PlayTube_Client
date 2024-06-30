import { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { DataContext } from "../components/DataProviderContext";
import styles from "../style/clientAllDataStyle/ClientAllData.module.css";
import { HiOutlineUserPlus } from "react-icons/hi2";
import ClientVideosComponent from "./ClientVideosComponent";
import ClientPlaylistComponent from "./ClientPlaylistComponent";
import ClientTweetsComponent from "./ClientTweetsComponent";
import ClientSubscribedComponent from "./ClientSubscribedComponent";

function ClientAllDataSection() {
  const { data } = useContext(DataContext);
  const location = useLocation();
  const { id } = useParams();
  const datas =
    location.state || data.find((item) => item.id === Number(id)) || {};
  const { chName, image, banner } = datas;
  const [component, setComponet] = useState("Videos");

  return (
    <div className={styles.right}>
      <div className={styles.branner}>
        <img src={banner} alt="thumbnail" />
      </div>
      <div className={styles.mid}>
        <div className={styles.channel}>
          <img src={image} alt="channel-icon" />
          <div className={styles.channel_content}>
            <h4>{chName}</h4>
            <h5>@reactpatterns</h5>
            <h5>600k Subcribers . 220 Subscribed</h5>
          </div>
        </div>
        <button className={styles.subscribebtn}>
          <HiOutlineUserPlus /> Subscribe
        </button>
      </div>
      <div className={styles.bottom}>
        {buttonItem.map((item, index) => (
          <button
            key={index}
            onClick={() => setComponet(item.name)}
            className={`${component === item.name ? styles.btnactive : ""}`}
          >
            {item.name}
          </button>
        ))}
      </div>
      {component === "Videos" && <ClientVideosComponent />}
      {component === "Playlist" && <ClientPlaylistComponent />}
      {component === "Tweets" && <ClientTweetsComponent />}
      {component === "Subscribed" && <ClientSubscribedComponent />}
    </div>
  );
}

export default ClientAllDataSection;

const buttonItem = [
  {
    name: "Videos",
  },
  {
    name: "Playlist",
  },
  {
    name: "Tweets",
  },
  {
    name: "Subscribed",
  },
];
