
import { Route, Routes } from "react-router-dom"
import HomePageCard from "./HomePageCard"
import LoginPage from "../views/LoginPage"
import VideoDetailsSection from "../views/VideoDetailsSection"
import SearchResultComponent from "../views/SearchResultComponent"


function AllComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageCard/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/video-details/:id" element={<VideoDetailsSection/>}/>
        <Route path="/search" element={<SearchResultComponent/>}/>
      </Routes>
    </>
  )
}

export default AllComponent
