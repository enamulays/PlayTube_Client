import HomePageMain from "./HomePageMain";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function HomePageCard() {
  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <Navbar />
          <div className="container-bottom">
            <Sidebar />
            <HomePageMain/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageCard;
