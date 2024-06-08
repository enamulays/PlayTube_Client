import { BrowserRouter } from "react-router-dom";
import AllComponent from "./components/AllComponent";
import DataProviderContext from "./components/DataProviderContext";

function App() {
  return (
    <BrowserRouter>
      <DataProviderContext>
        <AllComponent />
      </DataProviderContext>
    </BrowserRouter>
  );
}

export default App;
