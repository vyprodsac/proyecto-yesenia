import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layouts";
import Index from "./pages/Index";
import SignInSignUp from "./components/SignInSignUp";
import SignUp from "./components/SignUp";
import Plans from "./components/Plans";
import Profile from "./components/Profile";
import Platform from "./pages/Platform";
import Courses from "./pages/Courses";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registro-iniciar-sesion" element={<SignInSignUp />} />
          <Route path="/registro" element={<SignUp />} />
          <Route path="/planes" element={<Plans />} />
          <Route path="/perfil-plataforma" element={<Profile />} />
          <Route path="/plataforma-inicio" element={<Platform />} />
          <Route path="/cursos-inicio" element={<Courses />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
