import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { HomePage } from "./pages/HomePage";
import { MentorPageInfo } from "./pages/MentorPageInfo";
import { Footer } from "./components/common/Footer";
import { OnGoingStartupthonInfo } from "./pages/OnGoingStartupthonInfo";
import { WinnerStudentInfo } from "./pages/WinnerStudentInfo";
import { Login } from "./pages/admin/Login";
import { Dashboard } from "./pages/admin/Dashboard";
import { Challenges } from "./pages/admin/DashboardPages/Challenges";
import { Founders } from "./pages/admin/DashboardPages/Founders";
import { Champions } from "./pages/admin/DashboardPages/Champions";
import { Subscribers } from "./pages/admin/DashboardPages/Subscribers";

//  0B192C
function App() {
  return (
    <div className="bg-[#1A1A1D] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentor/:id" element={<MentorPageInfo />} />
        <Route
          path="/on-going-startupthon/:id"
          element={<OnGoingStartupthonInfo />}
        />
        <Route path="/winner-student/:id" element={<WinnerStudentInfo />} />
        <Route path="/admin/login" element={<Login />} />
        <Route element={<Dashboard />}>
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/subscribers" element={<Subscribers />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
