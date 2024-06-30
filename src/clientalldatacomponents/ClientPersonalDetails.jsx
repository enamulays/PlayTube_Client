import { useContext, useState } from "react";
import styles from "../style/clientAllDataStyle/ClientAllData.module.css";
import { DataContext } from "../components/DataProviderContext";
import { useParams } from "react-router-dom";
import { HiOutlineUserPlus } from "react-icons/hi2";
import ClientPersonalInformation from "./ClientPersonalInformation";
import ClientChannelInformation from "./ClientChannelInformation";
import ClientPasswordChange from "./ClientPasswordChange";

function ClientPersonalDetails() {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const datas = data.find((item) => item.id === Number(id));
  const { banner, image, chName } = datas;
  const [component, setComponet] = useState("Personal Information");

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
      <div className={`${styles.bottom} flex justify-between`}>
        {buttonItem.map((item, index) => (
          <button
            key={index}
            onClick={() => setComponet(item.name)}
            className={`${
              component === item.name ? styles.btnactive : ""
            } w-72`}
          >
            {item.name}
          </button>
        ))}
      </div>
      {component === "Personal Information" && <ClientPersonalInformation />}
      {component === "Channel Information" && <ClientChannelInformation />}
      {component === "Change Password" && <ClientPasswordChange />}
    </div>
  );
}

export default ClientPersonalDetails;

const buttonItem = [
  {
    name: "Personal Information",
  },
  {
    name: "Channel Information",
  },
  {
    name: "Change Password",
  },
];
