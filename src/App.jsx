import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import LandingPage from "./pages/LandingPage";
import StudentPage from "./pages/StudentPage";
import TeacherPage from "./pages/TeacherPage";
import AdminPage from "./pages/AdminPage";
import TeacherSignUp from "./component/TeacherSignUp";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentLogin from "./component/StudentLogin";
import StudentSignup from "./component/StudentSignup";
import Studentdashboard from "./pages/Studentdashboard";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherLogin from "./component/TeacherLogin";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/teacher/signup" element={<TeacherSignUp />} />
          <Route path="/teacher" element={<TeacherPage />}>
            <Route path="dashboard" element={<TeacherDashboard />} />
          </Route>
          <Route path="/student" element={<StudentPage />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route path="/student/dashboard" element={<Studentdashboard />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
