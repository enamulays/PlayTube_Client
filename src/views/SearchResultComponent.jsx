import { useContext, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../components/DataProviderContext";
import Navbar from "../components/Navbar";
import SideBarListData from "../components/SideBarListData";
import style from "../style/SearchResult.module.css";
import { CiPlay1 } from "react-icons/ci";

function SearchResultComponent() {
  const videoRefs = useRef([]);
  const navigate = useNavigate();
  const { data, sidebar } = useContext(DataContext);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query").toLowerCase();

  const filteredItem = data.filter((datas) =>
    datas.title.toLowerCase().includes(query)
  );

  useEffect(() => {
    const handleVideoNavigate = (index) => () => {
      navigate("/video_details", { state: filteredItem[index] });
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
  }, [navigate, filteredItem]);

  return (
    <div className="container">
      <div className="container-wrapper">
        <Navbar />
        <div className="container-bottom">
          <div className={`sidebar-wrap ${style.sidebar_wrap}`}>
            <SideBarListData sidebar={sidebar} />
          </div>
          <div className={`right-side ${style.right}`}>
            {filteredItem.length > 0 ? (
              filteredItem.map((item, index) => (
                <div className={style.video_in} key={index}>
                  <video
                    src={item.video}
                    className="top-video"
                    ref={(el) => (videoRefs.current[index] = el)}
                  />
                  <div className={`home-card-in-bottom ${style.card_discrip}`}>
                    <div className="card-info">
                      <h1>{item.title}</h1>
                      <span>{item.view}k Views</span>
                      <span> . {item.upTime} minutes ago</span>
                      <h2>{item.chName}</h2>
                    </div>
                    <img
                      src={item.image}
                      alt={`thumbnail-${index}`}
                      className="bottom-image"
                    />
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className={style.no_data_found}>
                <button>
                  <CiPlay1 />
                </button>
                <h2>No Videos available for: {query}</h2>
                <p>
                  There are no videos here available. Please try to search some
                  thing else.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultComponent;
