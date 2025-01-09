import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./Components/Layout";
import Login from "./Components/Admin/Login";
import PrivacyPolicy from "./PrivacyPolicy";
import RequireAuth from "./Components/RequireAuth";
import AdminPage from "./Components/Admin/AdminPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />

          <Route element={<RequireAuth />}>
            <Route path="/admink" element={<AdminPage />} />
            <Route path="/admink/hero" element={<p>Hero page</p>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
