import { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { DataContext } from "../components/DataProviderContext";
import Navbar from "../components/Navbar";
import SideBarListData from "../components/SideBarListData";
import styles from "../style/ClientAllData.module.css";
import { HiOutlineUserPlus } from "react-icons/hi2";
import ClientVideosComponent from "./ClientVideosComponent";
import ClientPlaylistComponent from "./ClientPlaylistComponent";
import ClientTweetsComponent from "./ClientTweetsComponent";
import ClientSubscribedComponent from "./ClientSubscribedComponent";

function ClientAllDataSection() {
  const { data, sidebar } = useContext(DataContext);
  const location = useLocation();
  const { id } = useParams();
  const datas = location.state || data.find((item) => item.id === id) || {};
  const { title, image } = datas;
  const [component, setComponet] = useState("videos");

  return (
    <div className="container">
      <div className="container-wrapper">
        <Navbar />
      </div>
      <div className={styles.contaner_bottom}>
        <div className={`${"sidebar-wrap"} ${styles.sidebar_wrapper}`}>
          <SideBarListData sidebar={sidebar} />
        </div>
        <div className={styles.right}>
          <div className={styles.branner}>{}</div>
          <div className={styles.mid}>
            <div className={styles.channel}>
              <img src={image} alt="channel-icon" />
              <div className={styles.channel_content}>
                <h4>React Patterns</h4>
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
          {component === "Videos" && <ClientVideosComponent/>}
          {component === "Playlist" && <ClientPlaylistComponent/>}
          {component === "Tweets" && <ClientTweetsComponent/>}
          {component === "Subscribed" && <ClientSubscribedComponent/>}
        </div>
        <img src={image} alt={title} />
        <h1>{title}</h1>
      </div>
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
