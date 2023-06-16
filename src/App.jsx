import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layouts";
import Index from "./pages/Index";
import SignInSignUp from "./components/SignInSignUp";
import SignUp from "./components/SignUp";
import Plans from "./components/Plans";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registro-iniciar-sesion" element={<SignInSignUp />} />
          <Route path="/registro" element={<SignUp />} />
          <Route path="/planes" element={<Plans />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
