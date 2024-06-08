
import { Route, Routes } from "react-router-dom"
import HomePageCard from "./HomePageCard"
import LoginPage from "../navigationcomponent/LoginPage"
import VideoDetailsSection from "../navigationcomponent/VideoDetailsSection"
import SearchResultComponent from "../navigationcomponent/SearchResultComponent"


function AllComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageCard/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/video_details" element={<VideoDetailsSection/>}/>
        <Route path="/search" element={<SearchResultComponent/>}/>
      </Routes>
    </>
  )
}

export default AllComponent
