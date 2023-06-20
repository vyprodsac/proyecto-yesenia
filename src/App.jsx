import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layouts";
import Index from "./pages/Index";
import SignInSignUp from "./components/SignInSignUp";
import SignUp from "./components/SignUp";
import Plans from "./components/Plans";
import Profile from "./components/Profile";
import Platform from "./pages/Platform";
import Courses from "./pages/Courses";
import Platform2 from "./pages/Platform2";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

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
          <Route path="/plataforma-inicio2" element={<Platform2 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/check-out" element={<Checkout/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
