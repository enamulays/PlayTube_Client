import { Route, Routes, useNavigate } from "react-router-dom";
import HomePageCard from "./HomePageCard";
import LoginPage from "../views/LoginPage";
import VideoDetailsSection from "../views/VideoDetailsSection";
import SearchResultComponent from "../views/SearchResultComponent";
import SignUpSection from "../views/SignUpSection";
import { useEffect, useRef } from "react";
import ClientAllDataSection from "../clientalldatacomponents/ClientAllDataSection";

function AllComponent() {
  const clientIconRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClientIconClick = (event) => {
      const id = event.target.dataset.id;
      const clientData = clientIconRef.current.find(ref => ref.dataset.id === id)?.dataset;
      navigate(`/client-all-data/${id}`, { state: { ...clientData } });
    };

    const clientIconReference = clientIconRef.current;
    clientIconReference.forEach((iconReference) => {
      if (iconReference) {
        iconReference.addEventListener('click', handleClientIconClick);
      }
    });

    return () => {
      clientIconReference.forEach((iconReference) => {
        if (iconReference) {
          iconReference.removeEventListener('click', handleClientIconClick);
        }
      });
    };
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageCard clientIconRef={clientIconRef} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpSection />} />
        <Route path="/video-details/:id" element={<VideoDetailsSection />} />
        <Route path="/search" element={<SearchResultComponent />} />
        <Route path="/client-all-data/:id" element={<ClientAllDataSection />} />
      </Routes>
    </>
  );
}

export default AllComponent;
