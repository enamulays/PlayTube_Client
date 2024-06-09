import HomePageMain from "./HomePageMain";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PropTypes from 'prop-types';

function HomePageCard({clientIconRef}) {
  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <Navbar />
          <div className="container-bottom">
            <Sidebar />
            <HomePageMain clientIconRef= {clientIconRef}/>
          </div>
        </div>
      </div>
    </>
  );
}
 HomePageCard.propTypes={
  clientIconRef: PropTypes.object.isRequired
}
export default HomePageCard;
