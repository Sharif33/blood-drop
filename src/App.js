import * as React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import AllDonors from "./components/pages/Donors/AllDonors";
import Home from "./components/pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="donors" element={<AllDonors />} />
            {/* <Route path="*" element={<NotFound />} />s */}
      </Routes>
    </div>
  );
}

export default App;
