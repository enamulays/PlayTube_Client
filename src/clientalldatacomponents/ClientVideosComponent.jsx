import { useContext } from "react"
import { DataContext } from "../components/DataProviderContext"


function ClientVideosComponent() {
  const {data} =useContext(DataContext)


  return (
    <>
      <div className="home-page">
      <div className="home-page-in">
        {data.map((item, index) => (
          <div className="home-card-inner" key={item.id} id={item.id}>
            <video
              src={item.video}
              className="top-video"
              // ref={(el) => (videoRefs.current[index] = el)}
            />
            <div className="home-card-in-bottom">
              <img
                src={item.image}
                alt={`thumbnail-${index}`}
                className="bottom-image"
                // ref={(el) => (clientIconRef.current[index] = el)}
                data-id={item.id}
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
    </>
  )
}

export default ClientVideosComponent
