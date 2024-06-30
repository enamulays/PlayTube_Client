import { Route, Routes } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import VideoDetailsSection from "../views/VideoDetailsSection";
import SearchResultComponent from "../views/SearchResultComponent";
import SignUpSection from "../views/SignUpSection";
import ClientAllDataSection from "../clientalldatacomponents/ClientAllDataSection";
import ClientPersonalDetails from "../clientalldatacomponents/ClientPersonalDetails";
import AdminDashboard from "../clientalldatacomponents/AdminDashboard";
import LayoutComponent from "../layouts/LayoutComponent";
import PrivacySection from "../views/PrivacySection";
import TermsAndCondition from "../views/TermsAndCondition";
import HomePageMain from "./HomePageMain";
import LayoutTwo from "../layouts/LayoutTwo";

function AllComponent() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutComponent>
              <LayoutTwo>
                <HomePageMain />
              </LayoutTwo>
            </LayoutComponent>
          }
        />

        <Route
          path="/login"
          element={
            <LayoutComponent>
              <LoginPage />
            </LayoutComponent>
          }
        />

        <Route
          path="/signup"
          element={
            <LayoutComponent>
              <SignUpSection />
            </LayoutComponent>
          }
        />
        
        <Route
          path="/video-details/:id"
          element={
            <LayoutComponent>
              <LayoutTwo>
                <VideoDetailsSection />
              </LayoutTwo>
            </LayoutComponent>
          }
        />

        <Route
          path="/search"
          element={
            <LayoutComponent>
              <LayoutTwo>
                <SearchResultComponent />
              </LayoutTwo>
            </LayoutComponent>
          }
        />

        <Route
          path="/client-all-data/:id"
          element={
            <LayoutComponent>
              <LayoutTwo>
                <ClientAllDataSection />
              </LayoutTwo>
            </LayoutComponent>
          }
        />
        
        <Route
          path="/client-personal-details/:id"
          element={
            <LayoutComponent>
              <LayoutTwo>
                <ClientPersonalDetails />
              </LayoutTwo>
            </LayoutComponent>
          }
        />

        <Route path="/client-dashboard/:id" element={
            <LayoutComponent>
              <AdminDashboard />
            </LayoutComponent>
          } />

        <Route
          path="/privacy/:id"
          element={
            <LayoutComponent>
              <PrivacySection />
            </LayoutComponent>
          }
        />
        
        <Route
          path="/terms-and-condition/:id"
          element={
            <LayoutComponent>
              <TermsAndCondition />
            </LayoutComponent>
          }
        />
      </Routes>
    </>
  );
}

export default AllComponent;
